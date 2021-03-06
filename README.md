# Professional README Generator

## Description

To help reduce the time and effort it takes for a develper to organize and properly format information about their application's README file, we have created a README generator.  This application, written in node.js, will prompt the developer to enter the necessary information about their application or project and create a professional README document for them.  

## Installation

1. [Fork the repository](https://github.com/monstertruckdog/readme-generator) to a local directory
2. In your terminal, navigate to the repository directory and execute the following command:

 ```
 npm i
 ```
3. Once installation is completed, execute another command in the terminal:

 ```
  node index.js
```

4. Follow the prompts in the application
5. Once the application has generated the file navigate to the `/output` folder in the directory
6. Open the `README.md` file and make any edits needed
7. When ready, add the `README.md` file to the repo directory so that it's ready for the next `git add`

## Usage

##### Entering README text

![01_readme-generator_prompts](./utils/readme_content/01_readme-generator_prompts.gif)

##### README Generated Output

![02_readme-generator_markdown_in_mdeditor](./utils/readme_content/02_readme-generator_markdown_in_mdeditor.gif)

##### README Display in GitHub

![03_readme-generator_markdown_in_github](./utils/readme_content/03_readme-generator_markdown_in_github.gif)

### Contribute

If you'd like to contribute to this project please feel free to reach out to me before submitting pull requests for review.

### Testing

We care greatly about quality and welcome all contriubtors to report bugs and issues as they are discovered through GitHub.  Development and implementation of unit tests are at the top of the product roadmap checklist and we hope to start rolling those out soon.

### Future Enhancements

* Implement unit tests
* Allow for multiple badges/licenses
* Allow for option to enter multi-line text via the `editor` method in inquirer
* Improve appearence of prompts

### Questions

* GitHub:  [link](https://github.com/monstertruckdog/readme-generator)
* Email:  *see GitHub page*