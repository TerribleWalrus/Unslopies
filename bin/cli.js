#!/usr/bin/env node
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const readline = require('readline');

const SKILL = 'unslop-design';
const SRC = path.join(__dirname, '..', 'skills', SKILL);
const LEGACY = ['unslop-design-1-7', 'unslop-design-1-65', 'unslop-design-1-6', 'unslop-design-1-5', 'unslop-design-1-0'];

const home = os.homedir();
const codexHome = process.env.CODEX_HOME || path.join(home, '.codex');
const xdg = process.env.XDG_CONFIG_HOME || path.join(home, '.config');

// project: path under the current directory. global: path under the home directory.
// detect: a folder whose presence means the agent is installed.
const AGENTS = {
  claude:   { label: 'Claude Code', project: '.claude/skills',   global: path.join(home, '.claude/skills'),   detect: path.join(home, '.claude') },
  codex:    { label: 'Codex',       project: '.agents/skills',   global: path.join(codexHome, 'skills'),      detect: codexHome },
  cursor:   { label: 'Cursor',      project: '.cursor/skills',   global: path.join(home, '.cursor/skills'),   detect: path.join(home, '.cursor') },
  gemini:   { label: 'Gemini CLI',  project: '.gemini/skills',   global: path.join(home, '.gemini/skills'),   detect: path.join(home, '.gemini') },
  opencode: { label: 'OpenCode',    project: '.opencode/skills', global: path.join(xdg, 'opencode/skills'),   detect: path.join(xdg, 'opencode') },
  copilot:  { label: 'Copilot',     project: '.github/skills',   global: path.join(home, '.copilot/skills'),  detect: path.join(home, '.copilot') },
};

const HELP = `unslop-design: install the Unslop Design skill into your coding agents

Usage
  npx unslop-design [options]

Options
  -a, --agent <list>   Agents to install into, comma separated, or "all".
                       One or more of: ${Object.keys(AGENTS).join(', ')}
                       Default: every agent detected on this machine.
  -p, --project        Install into the current project instead of your home folder.
  -r, --remove         Remove the skill instead of installing it.
  -l, --list           Show where the skill goes and which agents were detected.
  -y, --yes            Don't ask for confirmation.
  -n, --dry-run        Show what would happen without changing anything.
  -h, --help           Show this help.

Examples
  npx unslop-design                    detect agents, confirm, install globally
  npx unslop-design -a claude,codex    just those two
  npx unslop-design --project --all    into ./.claude, ./.agents, ./.cursor, ...
  npx unslop-design --remove -a codex
`;

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function parse(argv) {
  const o = { agents: null, project: false, remove: false, list: false, yes: false, dry: false, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '-h' || a === '--help') o.help = true;
    else if (a === '-p' || a === '--project') o.project = true;
    else if (a === '-g' || a === '--global') o.project = false;
    else if (a === '-r' || a === '--remove') o.remove = true;
    else if (a === '-l' || a === '--list') o.list = true;
    else if (a === '-y' || a === '--yes') o.yes = true;
    else if (a === '-n' || a === '--dry-run') o.dry = true;
    else if (a === '--all') o.agents = ['all'];
    else if (a === '-a' || a === '--agent' || a === '--agents') {
      const v = argv[++i];
      if (!v) fail(`${a} needs a value`);
      o.agents = (o.agents || []).concat(v.split(',').map(s => s.trim().toLowerCase()).filter(Boolean));
    } else fail(`Unknown option: ${a}\n\n${HELP}`);
  }
  return o;
}

const targetDir = (id, project) =>
  path.join(project ? path.join(process.cwd(), AGENTS[id].project) : AGENTS[id].global, SKILL);

// Two agents can share one folder; don't install into it twice.
function dedupe(ids, project) {
  const seen = new Set();
  return ids.filter(id => {
    const t = targetDir(id, project);
    if (seen.has(t)) return false;
    seen.add(t);
    return true;
  });
}

const detected = () => Object.keys(AGENTS).filter(id => fs.existsSync(AGENTS[id].detect));

function resolveAgents(o) {
  if (!o.agents) return null;
  if (o.agents.includes('all')) return Object.keys(AGENTS);
  const bad = o.agents.filter(a => !AGENTS[a]);
  if (bad.length) fail(`Unknown agent: ${bad.join(', ')}. Choose from: ${Object.keys(AGENTS).join(', ')}, all`);
  return [...new Set(o.agents)];
}

function ask(q) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(res => rl.question(q, a => { rl.close(); res(a.trim().toLowerCase()); }));
}

function warnLegacy(id, project) {
  const base = path.dirname(targetDir(id, project));
  const found = LEGACY.filter(n => fs.existsSync(path.join(base, n)));
  if (found.length) {
    console.log(`  note: older copies in ${base}: ${found.join(', ')}. Delete them so they don't compete with this one.`);
  }
}

async function main() {
  const o = parse(process.argv.slice(2));
  if (o.help) return console.log(HELP);
  if (!fs.existsSync(path.join(SRC, 'SKILL.md'))) fail(`Skill files not found at ${SRC}`);

  const found = detected();
  const scope = o.project ? 'project' : 'global';

  if (o.list) {
    console.log(`Skill: ${SKILL}   (${scope} locations)\n`);
    for (const id of Object.keys(AGENTS)) {
      const installed = fs.existsSync(targetDir(id, o.project));
      console.log(`  ${AGENTS[id].label.padEnd(12)} ${found.includes(id) ? 'detected ' : 'not found'}  ${installed ? '[installed] ' : ''}${targetDir(id, o.project)}`);
    }
    return;
  }

  let ids = resolveAgents(o);
  const explicit = !!ids;
  if (!ids) {
    ids = o.project
      ? Object.keys(AGENTS).filter(id => fs.existsSync(path.join(process.cwd(), path.dirname(AGENTS[id].project))))
      : found;
    if (!ids.length) {
      if (o.project) ids = ['claude', 'codex'];
      else fail('No supported agents detected. Pick some with --agent, for example:\n  npx unslop-design --agent claude,codex\nSee --help for the list.');
    }
  }
  ids = dedupe(ids, o.project);

  console.log(`${o.remove ? 'Remove from' : 'Install into'} (${scope}):`);
  for (const id of ids) console.log(`  ${AGENTS[id].label.padEnd(12)} ${targetDir(id, o.project)}`);

  if (o.dry) return console.log('\nDry run, nothing changed.');

  if (!o.yes && !explicit && process.stdin.isTTY) {
    const a = await ask('\nContinue? [Y/n] ');
    if (a && a !== 'y' && a !== 'yes') return console.log('Cancelled.');
  }

  console.log('');
  let failed = 0;
  for (const id of ids) {
    const dest = targetDir(id, o.project);
    try {
      if (o.remove) {
        if (fs.existsSync(dest)) { fs.rmSync(dest, { recursive: true, force: true }); console.log(`✓ ${AGENTS[id].label}: removed`); }
        else console.log(`- ${AGENTS[id].label}: not installed`);
      } else {
        fs.rmSync(dest, { recursive: true, force: true });
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.cpSync(SRC, dest, { recursive: true });
        console.log(`✓ ${AGENTS[id].label}: installed`);
        warnLegacy(id, o.project);
      }
    } catch (e) {
      failed++;
      console.error(`✗ ${AGENTS[id].label}: ${e.message}`);
    }
  }
  if (!o.remove && failed < ids.length) {
    console.log('\nDone. Restart your agent, then ask it to design or restyle something, or invoke the "unslop-design" skill by name.');
  }
  if (failed) process.exit(1);
}

main().catch(e => fail(e.message));
