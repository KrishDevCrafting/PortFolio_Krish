---
description: Commit and push code to main branch with proper format
---

// turbo-all

1. Check git status to see what files have changed

```
git status
```

2. Stage all changes

```
git add .
```

3. Commit with a proper conventional commit message based on the changes made

```
git commit -m "<type>: <short description>

- <detail 1>
- <detail 2>
- <detail 3>"
```

Commit types:

- `feat` - new feature
- `fix` - bug fix
- `refactor` - code refactor
- `style` - styling changes
- `chore` - maintenance tasks
- `docs` - documentation

4. Push to main branch

```
git push origin main
```
