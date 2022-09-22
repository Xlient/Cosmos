# The Missing Artifact

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li> Run the starter workflow you just created</li>
  <li>Create a build artifact <em>HACK</em>.</li>
</ul>
</div>

 With Github Actions [workflow artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts) allow you to persist data after a job has completed. Build artifacts are files (or a single) that are produced when you build your code. It includes not only your source code but also the projects dependencies or packages,binaries and etc; In your workflow you can produce and upload artifacts to be downloaded or shared with other jobs.

If you noticed in the starter workflow in the `Create app package` job we are building our code and packaging it up using the MSIX packaging tool.

```yml
 name: Create the app package
      run: msbuild $env:Wap_Project_Path /p:Configuration=$env:Configuration /p:UapAppxPackageBuildMode=$env:Appx_Package_Build_Mode /p:AppxBundle=$env:Appx_Bundle /p:PackageCertificateKeyFile=GitHubActionsWorkflow.pfx /p:PackageCertificatePassword=${{ secrets.Pfx_Key }}
      env:
        Appx_Bundle: Always
        Appx_Bundle_Platforms: x86|x64
        Appx_Package_Build_Mode: StoreUpload
        Configuration: ${{ matrix.configuration }}

```
 Now uncomment the Upload build artifacts job, you previously commented out.
```yml
  - name: Upload build artifacts
      uses: actions/upload-artifact@v3
      with:
        name: MSIX Package
        path: ${{ env.Wap_Project_Directory }}\AppPackages
```

Commit and push your changes and when your workflow is finished running, check to see if you have a artifact uploaded. Once your done press the _HACK_ button.
