param(
  [switch]$NoBuild
)

$Project = "site-institucional-dibs"
$ManageCred = "C:\DIBS SOLUTIONS\scripts\Manage-Credential.ps1"

function Deploy-Vercel($token, $noBuild) {
  if ($noBuild) {
    Write-Host "🏗️  Build local..." -ForegroundColor Cyan
    npm run build 2>&1 | Out-Host
    if ($LASTEXITCODE -ne 0) {
      Write-Host "❌ Build falhou. Deploy cancelado." -ForegroundColor Red
      exit 1
    }
  }
  npx vercel --prod --token $token --yes $(if ($noBuild) { '--no-build' }) 2>&1
}

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

if (-not $NoBuild) {
  Write-Host ""
  Write-Host "📦 Tipo de deploy:" -ForegroundColor Yellow
  Write-Host "   [1] Rápido — texto/imagens/detalhes (build local + upload ~10s)" -ForegroundColor Green
  Write-Host "   [2] Completo — alterações estruturais (build no Vercel ~2min)" -ForegroundColor Cyan
  $choice = Read-Host "Escolha (1/2)"
  $NoBuild = ($choice -eq "1")
}

if ($NoBuild) {
  Write-Host "🚀 Deploy rápido (build local + --no-build)..." -ForegroundColor Cyan
  Deploy-Vercel $token $true
} else {
  Write-Host "🚀 Deploy completo (build no Vercel)..." -ForegroundColor Cyan
  Deploy-Vercel $token $false
}

if ($LASTEXITCODE -eq 0) {
  Write-Host ""
  Write-Host "✅ Deploy concluído!" -ForegroundColor Green
  Write-Host "🌐 https://dibs.solutions" -ForegroundColor Cyan
  Write-Host ""
  Write-Host "💡 O script de versão no site já força atualização automática." -ForegroundColor Yellow
  Write-Host "   Dê um refresh no celular que as mudanças aparecem." -ForegroundColor Yellow
} else {
  Write-Host ""
  Write-Host "❌ Deploy falhou. Verifique o log acima." -ForegroundColor Red
  exit 1
}
