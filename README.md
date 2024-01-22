```
cd client
npm i
npm run dev

cd server
npm i
npm run prisma
npm run migrate
npm run tsc

cd server
npm run dev
```

Create a local and remote repository and first commit{

	git init => initialize the repository;

	git status => shows the status of files in the folder;

	git add <path file>/. => to place a file in the staging area;

	git add <path file>/. => to put all files in the staging area;

	git commit -m "<any name>" => to add commit in the repository;

	git branch -M "main" => to change the name of the main branch from master to main;

	git remote add origin <remote repository link> => To link local repository to remote repository;

	git push -u origin <branch name> => push to remote repository;

	OBS: to Refresh branch (add,commit and push(without "-u"));

}


git checkout -b "<new branch>" => create and log in a new branch;

git checkout <branch existentente> => transition between branches;

git merge <branch merge> => join two branches;

git clone <link to clone> => pull a project on your machine;

cd <name folder> log in the project;

git pull => Update clone;

Fork => pull a project to your remote repository;

Pull Request => asks the project owner to change the product;# academicosdesantacruz

Validation:
	It must not be empty;
	must not contain white spaces;
	must not contain letters;
	must not contain numbers;
	must not contain special characters;
	must not contain capital letters;
	must not contain lowercase letters;
 
	must contain only numbers;
	must contain only letters;
	must contain only capital letters;
	must contain only lowercase letters;
 
	must contain numbers;
	must contain letters;

	must contain capital letters;
	must contain lowercase letters;
 
	the content must be the same;

	must contain a minimum of characters;
	must contain a maximum of characters;

	npx prisma migrate dev --name reset