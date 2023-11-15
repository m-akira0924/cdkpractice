#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkpracticeStack } from '../lib/cdkpractice-stack';

const app = new cdk.App();
new CdkpracticeStack(app, 'CdkpracticeStack', {
});