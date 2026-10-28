Land Management System
A Salesforce-based application designed to organize land acquisition
workflows and keep related records in one place. The project uses
Salesforce custom objects, Lightning pages, Screen Flows, and Lightning
Web Components (LWC) to support structured data entry and management.
Project Overview
Land acquisition involves multiple related records, documents,
compensation details, and grievances. This project aims to make those
records easier to manage inside Salesforce by organizing information
into dedicated objects and guided workflows.
Key Modules
- Acquisition Case --- manage land acquisition case records.
- Land Document --- maintain documents associated with land
  records or acquisition cases.
- Compensation --- organize compensation-related information.
- Grievances --- record and manage grievances related to the
  process.
- Screen Flows --- guide users through record creation and data
  entry.
- Lightning Web Components (LWC) --- provide custom user-interface
  functionality where implemented.
Note: Update this section if your final org uses different object
names or includes additional modules.

Built With
- Salesforce Platform
- Salesforce Custom Objects and Fields
- Salesforce Flow Builder (Screen Flows)
- Lightning Web Components (LWC), where applicable
- Salesforce CLI
- Visual Studio Code
- Git and GitHub
Repository Structure
Land-Management-System/
├── force-app/
│   └── main/
│       └── default/
│           ├── applications/
│           ├── classes/
│           ├── flows/
│           ├── layouts/
│           ├── lwc/
│           ├── objects/
│           ├── permissionsets/
│           ├── tabs/
│           └── triggers/
├── manifest/
├── scripts/
├── sfdx-project.json
└── README.md
The exact folders in force-app/main/default/ depend on which metadata
types are included in the project.
Setup and Deployment
Prerequisites
- A Salesforce org with permission to deploy metadata
- Visual Studio Code
- Salesforce Extension Pack
- Salesforce CLI
- Git
1. Clone the repository
git clone https://github.com/ayush-sharma-2006/Land-Management-System.git
cd Land-Management-System
2. Open the project
Open the cloned folder in Visual Studio Code.
3. Authorize a Salesforce org
sf org login web --alias LandManagementOrg --instance-url https://login.salesforce.com
For a sandbox, use https://test.salesforce.com as the instance URL.
4. Deploy the project metadata
sf project deploy start --source-dir force-app/main/default --target-org LandManagementOrg
Replace LandManagementOrg with the alias of your authorized org.
Review the deployment output and resolve any metadata dependencies or
org-specific configuration issues.
Typical Workflow
1. Open the Salesforce app and navigate to the relevant records.
2. Create or review an acquisition case.
3. Add associated land-document details.
4. Maintain compensation information as applicable.
5. Record and follow up on grievances.
6. Use the configured Screen Flows or custom components to enter data
   where available.
The workflow above is a high-level description; adjust it to match the
actual configuration in your Salesforce org.
Security Notes
- Never commit Salesforce passwords, access tokens, refresh tokens,
  private keys, or other secrets.
- Keep local credentials and environment-specific configuration out of
  version control.
- Assign users only the Salesforce permissions they need.
- Review sharing settings, object permissions, field-level security,
  and Flow access before using the project with real data.
Future Enhancements
- Add role-based access and permission-set documentation.
- Add validation rules and automated notifications where appropriate.
- Improve search and filtering for acquisition cases and related
  records.
- Add screenshots or a short demo of the main workflows.
- Add test coverage and deployment instructions for any Apex
  components.
Author
Ayush Sharma
