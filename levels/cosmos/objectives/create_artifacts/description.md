# The Missing Artifact

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li> Run the starter workflow you just created</li>
  <li>Create a build artifact <em>HACK</em>.</li>
</ul>
</div>

Build artifacts are files that produced when you build your code. However it doesnt only include your source code but also the projects dependencies or packages,binaries and etc.. [Workflow Artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts) allow you to persist data after a job has completed.

If you noticed in the starter workflow in the `Create app package` job we are building our code and packaging it up using the  MSIX packaging tool and later uploading the produced artifact.

```yml
 name: Create the app package
      run: msbuild $env:Wap_Project_Path /p:Configuration=$env:Configuration /p:UapAppxPackageBuildMode=$env:Appx_Package_Build_Mode /p:AppxBundle=$env:Appx_Bundle /p:PackageCertificateKeyFile=GitHubActionsWorkflow.pfx /p:PackageCertificatePassword=${{ secrets.Pfx_Key }}
      env:
        Appx_Bundle: Always
        Appx_Bundle_Platforms: x86|x64
        Appx_Package_Build_Mode: StoreUpload
        Configuration: ${{ matrix.configuration }}

```


If your workflow is finsihed running, check to see if you have a artifact uploaded. Once your done press the _HACK_ button.
