@echo off
setlocal
cd /d C:\Projects\Stelora
set LOG=C:\Projects\Stelora\.git-push-debug.txt
echo === Git Push Debug Log === > "%LOG%"
echo Started: %DATE% %TIME% >> "%LOG%"
echo. >> "%LOG%"

echo === git remote -v === >> "%LOG%"
git remote -v >> "%LOG%" 2>&1
echo. >> "%LOG%"

echo === git status -sb === >> "%LOG%"
git status -sb >> "%LOG%" 2>&1
echo. >> "%LOG%"

echo === git count-objects -vH === >> "%LOG%"
git count-objects -vH >> "%LOG%" 2>&1
echo. >> "%LOG%"

echo === Top 20 largest tracked files === >> "%LOG%"
powershell -NoProfile -Command "git -C 'C:\Projects\Stelora' rev-list --objects --all | git -C 'C:\Projects\Stelora' cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | Where-Object { $_ -match '^blob ' } | ForEach-Object { $p = $_ -split ' ', 4; [PSCustomObject]@{ Size = [long]$p[2]; Path = $p[3] } } | Sort-Object Size -Descending | Select-Object -First 20 | ForEach-Object { '{0,12:N0}  {1}' -f $_.Size, $_.Path }" >> "%LOG%" 2>&1
echo. >> "%LOG%"

echo === Applying local git config === >> "%LOG%"
git config http.postBuffer 524288000 >> "%LOG%" 2>&1
git config http.version HTTP/1.1 >> "%LOG%" 2>&1
git config http.lowSpeedLimit 0 >> "%LOG%" 2>&1
git config http.lowSpeedTime 999999 >> "%LOG%" 2>&1
echo Config applied. >> "%LOG%"
git config --local --get-regexp "^http\." >> "%LOG%" 2>&1
echo. >> "%LOG%"

echo === git push -u origin main (start %TIME%) === >> "%LOG%"
echo Push starting... please wait up to 15 minutes.
git push -u origin main >> "%LOG%" 2>&1
set PUSH_EXIT=%ERRORLEVEL%
echo. >> "%LOG%"
echo === Push finished: exit=%PUSH_EXIT% at %TIME% === >> "%LOG%"
echo Push exit code: %PUSH_EXIT%
echo Log written to %LOG%
endlocal
exit /b %PUSH_EXIT%
