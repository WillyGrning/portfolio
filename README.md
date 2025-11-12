Get-ChildItem "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList" | ForEach-Object {
    $path = (Get-ItemProperty $_.PsPath).ProfileImagePath
    if ($path -like "*C:\Users\willy*") {
        Set-ItemProperty $_.PsPath -Name ProfileImagePath -Value ($path -replace "C:\\Users\\willy", "C:\\Users\\lenovo")
        Write-Host "✅ Registry path berhasil diubah jadi C:\Users\Hitam"
    }
}
