# Apper DevOps Engineer Technical Challenge! 

![Branding](https://media-exp1.licdn.com/dms/image/C510BAQHAhem3MAGMOw/company-logo_100_100/0/1548069481911?e=1619654400&v=beta&t=RMd-5dJ-YxQ475FznaYdeTFtQLf1NPNGCIw8g_Z5q-8) 

Apper helps businesses adopt new technology and innovation. We extend our years of experience and expertise to ensure worry-free and efficient execution.

## Background
Welcome to the Apper.ph technical challenge! If you are someone who wanted to be at the forefront of innovation and is looking to be a part of our awesome company, you are here at the right place. You will be a part of a sharp, motivated and world class team working on the most ground breaking technology.

## Basics
**The rules of this challenge is simple**

* Please commit all your scripts and templates on your Github repository(s).
&nbsp;
* What you will build should satisfy the challenge statement/requirements.
&nbsp;
* Your code should be human readable and uses intellectual words.
&nbsp;
* We at Apper, take code organization and application architecture quite seriously.
&nbsp;
* The challenge are divided into three tiers based on the knowledge and experience required to complete them.
  **Note**: *It's ok not to finish all of them but completing higher tier is very much encourage.*
&nbsp;
* Keep in touch with us and feel free to message us for questions and clarifications.

## The Challenge

Challenges are divided into three tiers based on the knowledge and experience
required to complete them.

| Tier | DevOps Profile                                                                                                                                                |
| :--: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1   | DevOps in the early stages of their learning journey. Those who are typically experienced deploying user-facing applications such as nodejs apps, ruby web apps, and php laravel apps on virtual machines or in cloud providers such as AWS, GCP, Azure or Heroku. Someone who can leverage ElasticBeanstalk. Also has deep knowledge on Linux Fundamentals and Databases that can leverage AWS RDS for MySQL and PostgreSQL and etc. Basic understanding on AWS basic services such as  VPC, Security Groups, S3, Route53, Cloudfront, Application Load Balancer, EC2 and IAM.                |
|  2   | DevOps at an intermediate stage of learning and experience. Deep understanding on Docker and Containerization. Can deploy containerize apps or api services on Amazon ECS. They are comfortable in automation tools such as Cloudformation or Terraform and Docker. Comfortable using development tools such as AWS CodePipeline, CodeBuild, CodeCommit and CodeDeploy for CI/CD. Have experience automating applications using scripts and other third party libraries. |
|  3   | DevOps who have all of the above, and are learning more advanced techniques like implementing microservices applications using Kubernetes and can leverage AWS EKS                   |


## Requirements
**🌟 What You’ll need to build 🌟**

This repository includes a simple and very minimal express nodejs app in the root directory (**./express-minapp**). What you need to do is use this user-facing application and deploy it on AWS. AWS Account will be provided by apper.ph. The deployment and infrastructure varies differently on each tier. Please refer to the diagram and instructions on each tier.

**🌟 What you are encouraged to use and our judging criteria 🌟**

Automation and CI/CD are the heart of DevOps. So you're encourage to use development tools, CI/CD tools and automation tools accordingly at all times.

![System diagram](assets/release.jpg)

* Implement IaC (Infrastructure as a code) leveraging AWS Cloudformation
* Implement CI/CD using AWS Codepipeline, CodeCommit, CodeBuild and CodeDeploy (Optional)
* Reusability of IaC templates
* Application is functional
* Securing the application using AWS Security Groups, AWS Certificate for HTTPS and proper AWS services access-control using IAM Roles.
* High Availability
* Auto Scaling

&nbsp;
### :ledger: Tier-1: Beginner Challenge
**Architecture diagram - ElasticBeanstalk**

![System diagram](assets/ElasticBeanstalk.png)

* Implement VPC
* Implement RDS
* Implement SecurityGroups
* Implement IAM Roles and Access Policies
* Implement Route53 -> Cloudfront -> Application Loadbalancer -> Elastic Beanstalk Integration and Connectivity (use apperdevops.com)
* Implement Elastic Beanstalk Web Server and RDS Connectivity
* Implement Elastic Beanstalk Custom Config using .ebextensions
* Implement CI/CD to ElasticBeanstalk using AWS CodePipeline. (No manual upload of application zip file.)

&nbsp;
### :ledger: Tier-2: Intermediate Challenge
**Architecture diagram - AWS ECS** 
![System diagram](assets/ECS.png)

* Implement VPC
* Implement RDS
* Implement SecurityGroups
* Implement IAM Roles and Access Policies
* Implement Route53 -> Cloudfront -> Application Loadbalancer -> AWS ECS Integration and Connectivity (use apperdevops.com)
* Implement AWS ECS Web Server and RDS Connectivity
* Dockerize the application. Add Dockerfile.
* Push image to AWS ECR
* Implement CI/CD to AWS ECS using AWS CodePipeline.

&nbsp;
### :ledger: Tier-3: Advanced Challenge
**Architecture diagram - Kubernetes AWS EKS**
![System diagram](assets/EKS.png)

* Implement VPC
* Implement RDS
* Implement SecurityGroups
* Implement IAM Roles and Access Policies
* Implement EKS Managed Nodegroups
* Implement Route53 -> Cloudfront -> Application Loadbalancer -> AWS EKS microservices Integration and Connectivity (use apperdevops.com)
* Implement AWS EKS microservices and RDS Connectivity
* Implement readable kubernetes manifest files
* Implement CI/CD to AWS EKS using AWS CodePipeline.

&nbsp;
## ✅ Submission Checklist

* Here at Apper, we use Basecamp as our official communication channel and project management tool. We will add you during the onboarding process.
&nbsp;
* AWS Account will be provided by Apper. It will be provision during the onboarding process.
&nbsp;
* Create your own Github repository. (e.g. repo name: surname-devops-challenge-project-id)
&nbsp;
* Commit all your work on the repository. It should include all the templates, manifest, configuration or any files that you've created to implement each challenges. We will review it base on our judging criteria stated above.
&nbsp;
* Tier 1 and 2 completion should be 1 week.
&nbsp;
* Tier 1, 2 and 3 completion should be 2 weeks.
&nbsp;  
* Submit the repo name, repo link and commit hash on or before the final day (11:59:59 UTC+8) of the given time frame on the DevOps Candidate message thread on our Basecamp.
&nbsp;
* Submit the working url on or before the final day (11:59:59 UTC+8) of the given time frame on the DevOps Candidate message thread on our Basecamp. We should be able to access the URL/ and URL/health.
&nbsp;
![System diagram](assets/working-page.jpg)
