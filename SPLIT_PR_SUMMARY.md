# PR #10142 Split Summary

## Original PR #10142
- **Title**: Upgrading DailyTxT to v2.4.1 and Invoice Ninja to v5.12.59
- **Author**: TheGuardianLight
- **Status**: Closed
- **Changes**: Updated 2 apps in a single PR

## Split Result

### Branch 1: dailytxt-v2.4.1
- **Commit**: 21b4740c2d55715ac7a7270fa4ea9f233c65b5a9
- **Author**: TheGuardianLight <64707127+TheGuardianLight@users.noreply.github.com>
- **Message**: chore(dailytxt): update to v2.4.1
- **Files Changed**:
  - apps/dailytxt/config.json (version: 2.3.0 → 2.4.1, tipi_version: 14 → 15)
  - apps/dailytxt/docker-compose.json (image: 2.3.0 → 2.4.1)
  - apps/dailytxt/docker-compose.yml (image: 2.3.0 → 2.4.1)

### Branch 2: invoice-ninja-v5.12.59
- **Commit**: d47f5fef6b404b9cf3ab40ec8ac6e79f7f8da948
- **Author**: TheGuardianLight <64707127+TheGuardianLight@users.noreply.github.com>
- **Message**: chore(invoice-ninja): update to v5.12.59
- **Files Changed**:
  - apps/invoice-ninja/config.json (version: 5.12.55 → 5.12.59, tipi_version: 107 → 108)
  - apps/invoice-ninja/docker-compose.json (image: 5.12.55 → 5.12.59)
  - apps/invoice-ninja/docker-compose.yml (image: 5.12.55 → 5.12.59)

## Notes
- Both branches preserve the original commit author (TheGuardianLight)
- Both branches are based on commit fda13b2 (same base as master)
- The min_tipi_version remains at 4.5.0 (not updated to 4.7.2 as in original PR, per user request)
- Each branch contains changes for only one app
- Ready to create separate pull requests for each branch

## Next Steps
To push these branches and create PRs, run:

```bash
# Push the DailyTxT branch
git push origin dailytxt-v2.4.1

# Push the Invoice Ninja branch  
git push origin invoice-ninja-v5.12.59
```

Then create two separate pull requests:
1. From `dailytxt-v2.4.1` → `master` with title: "chore(dailytxt): update to v2.4.1"
2. From `invoice-ninja-v5.12.59` → `master` with title: "chore(invoice-ninja): update to v5.12.59"
