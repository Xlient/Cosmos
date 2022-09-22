# Starter Workflows

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li> Create a new Workflow </li>
  <li>Use the `.NET Desktop` starter workflow </li>
  <li> Commit your changes changes and press <em>HACK</em>.</li>
</ul>
</div>

GitHub has preconfigured workflow templates that you can customize to create your own CI (continuous integration) workflow.
They are called starter workflows, Github analyzes your code and suggests starter workflows relevant  to your project.
Lets see how we can use them in our Ice Cream store application

## Create a new workflow

Navigate to the  `Actions` tab in your repository  and press  the `New Workflow` Button.

On the Get started with Github Actions page you'll be able to see variety of workflows to deploy code, setup CI workflows or setup automation in your repository. Under the  "Workflows made for your repository" section click the `Set up this workflow` button for the  `.NET Desktop`  starter workflow. This will create a `dotnet-desktop.yml` file, in this workflow aims to build , test, sign, and publish Ice Cream store App .NET .

## Environment Variables

In every workflow run are default environment variables set by Github. You can also set you own custom environment variables for your workflow, job or step using the  `env` keyword.
In  `dotnet-desktop.yml`  lets change the following environment variables to add the values for our solution

```yml
env:
      Solution_Name: IceCreamStore.sln                       
      Test_Project_Path: MyTest\MyTest.csproj             
      Wap_Project_Directory: WapProj   Package.
      Wap_Project_Path: WapProj/WapProj.wapproj 

```

Next comment out the following steps with a  `#` like so: 

```yml
# Execute all unit tests in the solution
  #  - name: Execute unit tests
      # run: dotnet test
```

and

```yml
# Remove the pfx
    #- name: Remove the pfx
      #run: Remove-Item -path $env:Wap_Project_Directory\$env:Signing_Certificate

```

finally

```yml
  #- name: Upload build artifacts
  #    uses: actions/upload-artifact@v3
  #    with:
  #      name: MSIX Package
  #      path: ${{ env.Wap_Project_Directory }}\AppPackages
```

Once you're done, commit your changes and click the _HACK_ button.
