# Hexis

One place where your team's AI skills, tools and knowledge live: centrally managed, reviewed and access-controlled, and usable from any AI agent.

Everything lives in a git repository you own, on any git host: skills as `SKILL.md` folders, tool manuals with an encrypted secrets vault, and knowledge. A built-in remote MCP server (OAuth 2.1) lets Claude Code, ChatGPT, Cursor or any MCP-capable agent connect with a single key, scoped to each person's role.

## How it works

- Changes to protected branches only land through change requests with owner approval, for people and agents alike
- Every change has an author and a way back, because it is all git underneath
- Each teammate connects their agent once; role-based access decides what it can see and do

## After installation

Sign in with the admin email and password you set during install. The setup screen then collects the knowledge-base git repository (an empty repo on GitHub, GitLab or any host) and a token with read/write access, tests them against the real host, and seeds the repo with a starter template.

To let agents connect from outside your network, expose the app and set the public URL, since MCP OAuth redirects are built from it.
