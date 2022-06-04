import { octokit } from "octokit";


async function getFileContents( user ,filePath) {
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

async function getWorkflow(user, workflowName)
{
  let response = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}', {
    owner: user,
    repo: 'IceCreamstore',
    workflow_id: workflowName
  })

 if(response.message.includes("Not found") )
 {
   return false;
 }

 return response;
}

async function isWorkflowDisabled(user, workflowName)
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

async function findJob(user, workflowName, jobName)
{
  let jobs = listJobs(user, workflowName);
  let job = {};
  jobs.forEach( jb => {

    if (jb.name === jobName) {
      job = jb;
    }
  });

  return job;
}

async function listJobs( user, workflowName)
{
  let runID = getWorkflowRuns(user, workflowName);

  if(runID === undefined)
  {
    return [] ;
  }

 let response = await octokit.request('GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs', {
    owner: user,
    repo: 'IceCreamstore',
    run_id:  runID
  })


  if(response.statusCode === 200)
      {
        return response.jobs;
      }
   return [];
}

async function getWorkflowRuns(user, workflowName)
{   
    let workflow_id;

    let response = await octokit.request('GET /repos/{owner}/{repo}/actions/runs', {
    owner:  user,
    repo: 'IceCreamstore'
  })

   
   response.workflow_runs.forEach( run => {

     if(run.name === workflowName)
     {
          workflow_id = run.id;
     }
   })
  
   return workflow_id | undefined;
}

async function getArtifact(user)
{
  let response = await octokit.request('GET /repos/{owner}/{repo}/actions/artifacts', {
    owner: user,
    repo: 'IceCreamstore'
  });

  if(response.message.includes("Not found") )
 {
   return false;
 }
 return response;
}

module.exports  = {
  findJob,
  getFileContents,
  getWorkflow,
  getWorkflowRuns,
  isWorkflowDisabled,
  listJobs,
 
  
};
