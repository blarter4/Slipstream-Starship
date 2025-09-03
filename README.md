# Slipstream Starship

**Mission:** Design an open-source **interplanetary starship** and supporting systems. Primary focus is the **ship** (structure, propulsion, GNC, life support, power, thermal, avionics). The **orbital dockyard** is a supporting asset for assembly, refit, and staging.

## Highlights
- Starship-first architecture (dockyard is secondary).
- Realistic engineering + simulation-first approach.
- Clear contribution lanes and safety review for high-risk theory.

## Quick Start
- Read **`docs/Slipstream - Master Plan.docx`** (upload to Google Drive to open as a Google Doc).
- Join Discord using `docs/Discord_Server_Layout.txt` as your setup guide.
- Pick a task from Issues → discuss in Discord → submit PR.

## Repo Layout
```
.github/                   # CI, templates
docs/                      # Plans, guides
ship/                      # Starship systems (primary)
  ├─ propulsion/           # Chemical/ion/plasma; theoretical extras gated
  ├─ structures/           # Hull, frames, joints, FEA notes
  ├─ gnc/                  # Guidance, Navigation & Control
  ├─ power/                # Solar, battery, (fusion placeholder)
  ├─ thermal/              # Radiators, heat pipes, management
  ├─ life-support/         # ECLSS models
  ├─ avionics/             # Flight software, buses, redundancy
  └─ payload/              # Hab/mission payloads, cargo
dockyard/                  # Orbital station & shipyard (secondary)
sim/                       # Simulation frameworks, scenarios
cad/                       # Parametric CAD and exports
mission-profiles/          # Reference missions & constraints
tools/                     # Contributor utilities
scripts/                   # Automation
```

## Contribution Flow
1. Open an **Issue** (choose a template).
2. Discuss in Discord to deconflict work.
3. Branch (`feature/short-title`) and PR with tests + docs.
4. Two approvals + green CI required.

## First Targets
- Ship **mass & power** budgets v0.1
- **Propulsion** trade study (CHEM vs ION/PLASMA; fusion placeholder)
- **GNC** architecture skeleton + sim harness
- **Thermal** baseline with radiator sizing bands
- **Dockyard**: minimal assembly/refit requirements

License: MIT (see `LICENSE`).