# モバイルアプリ開発

## ログイン機能

- [ガイド](https://firebase.google.com/docs/flutter/setup?platform=ios)
- Firebase 連携、ログイン有効化

### Apple でログイン

Runner アプリに「Apple でサインイン」機能があることを確認（ios/Runner.xcodeproj を Xcode 開いて設定）

![](/img/docs/apple-add-signin.png)

### Google でログイン

[my_project]/ios/Runner/Info.plist に以下を追加

```
<!-- Google Sign-in Section -->
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleTypeRole</key>
		<string>Editor</string>
		<key>CFBundleURLSchemes</key>
		<array>
			<!-- TODO: 以下は GoogleService-Info.plist の REVERSED_CLIENT_ID　の値を設定 -->
			<string>xxx</string>
		</array>
	</dict>
</array>
<!-- End of the Google Sign-in Section -->
```
