$regPath = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList"

$profileItems = Get-ChildItem $regPath
foreach ($item in $profileItems) {
    $profile = Get-ItemProperty $item.PSPath
    if ($profile.ProfileImagePath -like "*willy*") {
        Write-Host "SID ditemukan:" $item.PSChildName
        $sid = $item.PSChildName
        Set-ItemProperty -Path "$regPath\$sid" -Name "ProfileImagePath" -Value "C:\Users\lenovo"
        Write-Host "Path berhasil diubah menjadi C:\Users\lenovo"
    }
}
