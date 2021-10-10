# What are Github Actions

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Fork the IceCream store repository.</li>
  <li>Create a  `.github`  directory and `workflows` directory under it </li>
  <li>Create a workflow file called `hello.yml` then press <em>HACK</em>.</li>
</ul>
</div>

“ [GitHub Actions](https://github.com/features/actions) help you automate tasks within your software development life cycle. GitHub Actions are event-driven, meaning that you can run a series of commands after a specified event has occurred. For example, every time  you push a you can run a script or perhaps deploy an application“ These events trigger a workflow file.

## Workflows

 A workflow is an automated procedure that you add to your repository in the `.github/` folder. They’re made of one or more jobs and can be scheduled or triggered by an event. As previously mentioned an event is what triggers a workflow, an event could be pushing to a branch, creating a pull request or issue. Workflows can also be triggered manually.
 
## Create a workflow file

Lets start by creating a workflow file. First fork this sample  repository found [here](https://github.com/Xlient/IceCreamstore). In the repository create a folder called `.github`  and within `/.github`  directory create another new folder called `workflows` with a file called  `basic-workflow.yml`.

Here is an example :

![example1]("levels\cosmos\objectives\fork_sample\example1.png")

##### After typing .github add "/" to create directory

![example2]("levels\cosmos\objectives\fork_sample\example1.png")

##### Do the same to create the workflows folder

![example3]("levels\cosmos\objectives\fork_sample\example1.png")

name the file  `basic-workflow.yml`

When you're done commit your changes and press the  _HACK_  button.
