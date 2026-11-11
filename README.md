# Quant Trader Pro - iOS IPA Cloud Mac Pipeline

This folder is configured for automated cloud compilation of iOS applications using GitHub Actions on Apple Silicon Macs (`macos-latest`).

## How to Compile Your IPA Without a Mac

1. **Connect to Your GitHub Account:**
   Open PowerShell in this directory (`E:\iOS_IPA`) and run:
   ```powershell
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git branch -M main
   git add .
   git commit -m "Initialize iOS IPA Cloud Pipeline"
   git push -u origin main
   ```

2. **Cloud Mac Automatic Build:**
   - Every time you push changes, GitHub Actions automatically starts a virtual Apple Mac.
   - It runs Apple's official `xcodebuild` suite to compile the app.
   - It packages the compiled `.app` into a `.ipa` file inside a standard iOS `Payload` container.

3. **Download Your IPA:**
   - Go to your repository on GitHub.
   - Click the **Actions** tab.
   - Click the latest workflow run.
   - Under **Artifacts**, download `QuantTraderPro-iOS-IPA.zip`.
   - You can install this IPA on your physical iPhone via **AltStore**, **Sideloadly**, or your Apple Developer account!
