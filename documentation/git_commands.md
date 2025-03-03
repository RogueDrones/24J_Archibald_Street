# 1) Initialize a local Git repository (if not already done)

git init

# 2) Check the current status

git status

# 3) Stage all files

git add .

# 4) Commit the files

git commit -m "Initial commit"

# 5) Switch to 'main' branch (if you're not on it already)

git branch -M main

# 6) Add the remote origin (replace URL with your repo)

git remote add origin https://github.com/RogueDrones/24J_Archibald_Street.git

# 7) Push the local 'main' branch to the 'main' branch on GitHub

git push -u origin main
