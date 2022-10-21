 

async function getFileContents(octokit, user ,filePath) {
  const response  = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}',{
    mediaType: {
      format: "raw",
    },
    owner: user,
    repo: 'IceCreamstore',
    path: filePath
  });

  if(response.statusCode === 200)
      {
        return response.content;
      }
      else 
      {
        return "Not found";
      }
}

async function getWorkflow(octokit, user, workflowName)
{
  let response = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}', {
    owner: user,
    repo: 'IceCreamstore',
    workflow_id: workflowName
  })

 if(response.statusCode == 404 )
 {
   return false;
 }

 return response;
}

async function isWorkflowDisabled(octokit, user, workflowName)
{
  let response = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}', {
    owner: user,
    repo: 'IceCreamstore',
    workflow_id: workflowName
  })

  if(response.statusCode === 204)
  {
    return true;
  }

  return false;
}

async function findJob(octokit, user, workflowName, jobName)
{
  let jobs = await listJobs(octokit, user, workflowName);
  let job = {};
  console.log(jobs)
  jobs.forEach( jb => {
    console.log(jb)
    if (jb.name === jobName) {
      job = jb;
    }
  });

  return job;
}

async function listJobs(octokit,  user, workflowName)
{
  let runID = await getWorkflowRuns(octokit, user, workflowName);

  if(runID === undefined)
  {
    return [] ;
  }

 let response = await octokit.request('GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs', {
    owner: user,
    repo: 'IceCreamstore',
    run_id:  runID
  })

  console.log(response);
  if(response.status === 200)
      {
        
        return response.data.jobs;
      }
}

 async function getWorkflowRuns(octokit, user, workflowName)
{   
    let workflow_runId;

    let response = await octokit.request('GET /repos/{owner}/{repo}/actions/runs', {
    owner:  user,
    repo: 'IceCreamstore'
  })

    response.data.workflow_runs.forEach( run => {
     if(run.name === workflowName)
     {
           
          workflow_runId = run.id;
     }
   })
    
   return workflow_runId;
}

async function checkIfArtifactIsPresent(octokit, user)
{
  let response = await octokit.request('GET /repos/{owner}/{repo}/actions/artifacts', {
    owner: user,
    repo: 'IceCreamstore'
  });

  if(response.statusCode == 404 )
 {
   return false;
 }
 return true;
}

module.exports  = {
  findJob,
  getFileContents,
  getWorkflow,
  checkIfArtifactIsPresent,
  getWorkflowRuns,
  isWorkflowDisabled,
  listJobs,
 
  
};
