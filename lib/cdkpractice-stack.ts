import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { CodeBuildStep, CodePipeline, CodePipelineSource } from 'aws-cdk-lib/pipelines';

export class CdkpracticeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const repo = new codecommit.Repository(this, 'test1Repo', {
        repositoryName: "test2"
    });

    const pipeline = new CodePipeline(this, 'Pipeline', {
        pipelineName: 'test1Pipeline',
        synth: new CodeBuildStep('SynthStep', {
            input: CodePipelineSource.codeCommit(repo, 'develop'),
            installCommands: [
                'npm install -g aws-cdk',
                'npm install -g npm',
            ],
            commands: [
              'mkdir -p lambda_layer',
              'npm install',
              'npm ci',
              'npm run build',
              'npx cdk synth'
            ]
            },
        ),
    });
  }
}
