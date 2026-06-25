param(
  [switch]$NoBuild
)

$Project = "site-institucional-dibs"
$ManageCred = "C:\DIBS SOLUTIONS\scripts\Manage-Credential.ps1"

Write-Host "╔══════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Deploy - Site Institucional Dibs     ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

$status = git status --porcelain
if ($status) {
  Write-Host "⚠️  Há mudanças não commitadas:" -ForegroundColor Yellow
  $status | ForEach-Object { Write-Host "   $_" -ForegroundColor Yellow }
  Write-Host ""
  $confirm = Read-Host "Deseja commitar e fazer deploy? (S/n)"
  if ($confirm -ne "n") {
    git add -A
    $msg = Read-Host "Mensagem do commit (Enter para 'deploy: atualização')"
    if (-not $msg) { $msg = "deploy: atualização" }
    git commit -m $msg
    Write-Host "✅ Commit feito: $msg" -ForegroundColor Green
  } else {
    Write-Host "❌ Deploy cancelado." -ForegroundColor Red
    exit 1
  }
}

Write-Host "🔑 Recuperando token Vercel..." -ForegroundColor Cyan
$cred = & $ManageCred -Action Get -Project "vercel-dibs-solutions" 2>$null
if (-not $cred) {
  Write-Host "❌ Token Vercel não encontrado. Execute primeiro:" -ForegroundColor Red
  Write-Host "   & '$ManageCred' -Action Save -Project 'vercel-dibs-solutions'" -ForegroundColor Gray
  exit 1
}
$token = $cred.GetNetworkCredential().Password

Write-Host "🚀 Deployando..." -ForegroundColor Cyan
npx vercel --prod --token $token --yes 2>&1

if ($LASTEXITCODE -eq 0) {
  Write-Host ""
  Write-Host "✅ Deploy concluído!" -ForegroundColor Green
  Write-Host "🌐 https://dibs.solutions" -ForegroundColor Cyan
  Write-Host ""
  Write-Host "💡 Refresh no celular — o script de versão atualiza automaticamente." -ForegroundColor Yellow
} else {
  Write-Host ""
  Write-Host "❌ Deploy falhou. Verifique o log acima." -ForegroundColor Red
  exit 1
}
