# Can You Keep A Secret?

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a secret in your repository </li>
  <li>Use a secret in your workflow</li>
</ul>
</div>

## Whats a secret? 

Much like the ones to tell in real, they are pieces of private information used to gain access to protected resources like applications. Like a real secrect you dont want to tell it to everybody or put it directly in your code. Help Bob out by Creating a secret in the repository to store his secret. Then by creating another file called `bobs-secret.yml`
It should look something like this:

```yml
name: Bobs secret
on: [push]
jobs:
  say-hello:
    runs-on: ubuntu-latest
    steps:
      uses: actions/checkout@v2
      env: 
        BOBS_SECRET: ${{ secrects.YOUR_SECRET_NAME }}
      - run: echo "This is bob's secret guys!! $BOS_SECRET"
      - run: echo " *** Dont do this in Production ***"

```

Once your done click the _HACK_ button.
