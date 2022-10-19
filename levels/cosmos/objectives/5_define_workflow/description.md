# Get a Job

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>add `push` event to your workflow</li>
  <li> Create a simple job to create a text file that contains "Hello Actions".</li>
  <li>  <em>HACK</em>.</li>
</ul>
</div>

Now we have our workflow but it doesn't do much since its empty so lets add some  jobs to make it do something!

Using YAML syntax lets give our workflow a name and define a event

 ``` yml
 name: basic-workflow
 on: [push]  <-- event trigger

 ```

## Jobs & Steps

  Jobs are what make up a workflow and is essentially are a set of `steps` that execute on the same runner, by default these jobs will run in parallel. A step is an individual task that can run commands in a job. A step can be either an `action` or a shell command. They execute on the same runner, allowing the actions in that job to share data with each other.

Example of a job:

```yml
jobs:
  check-bats-version: // name of your job
    runs-on: ubuntu-latest // OS
    steps:
      - uses: actions/checkout@v2  //<-- action that checks out your repository and downloads it to the runner
      - uses: actions/setup-node@v2 <--- Now were using another action to set up a node environment
        with:
          node-version: '14'  <- fields from this action which tells which version to install
      - run: npm install  <-- running a command

```

## Create a job

Now lets create a simple job for our workflow. 

Add the following code to your file:

```yml
name: basic-workflow
on: [push]
jobs:
  say-hello:
    runs-on: ubuntu-latest 
    steps:
      - uses: actions/checkout@v2
      - run: touch hello.txt
      - run: echo "Hello actions" > hello.txt

```
Now we have a job that creates a file called `hello.txt` that says "Hello actions".
 Once your done commit and (optionally) push your changes  then click the _HACK_ button.
