// create the team
const generateTeam = team => {

    // create the boss html
    const generateboss = boss => {
        return `
        <div class="card staff-card">
        <div class="card-header">
            <h2 class="card-title">${boss.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${boss.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${boss.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${boss.getEmail()}">${boss.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${boss.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the html for staffs
    const generatestaff = staff => {
        return `
        <div class="card staff-card">
    <div class="card-header">
        <h2 class="card-title">${staff.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${staff.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${staff.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${staff.getEmail()}">${staff.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${staff.getGithub()}" target="_blank" rel="noopener noreferrer">${staff.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for trainee's
    const generatetrainee = trainee => {
        return `
        <div class="card staff-card">
    <div class="card-header">
        <h2 class="card-title">${trainee.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${trainee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${trainee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${trainee.getEmail()}">${trainee.getEmail()}</a></li>
            <li class="list-group-item">School: ${trainee.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(staff => staff.getRole() === "boss")
        .map(boss => generateboss(boss))
    );
    html.push(team
        .filter(staff => staff.getRole() === "staff")
        .map(staff => generatestaff(staff))
        .join("")
    );
    html.push(team
        .filter(staff => staff.getRole() === "trainee")
        .map(trainee => generatetrainee(trainee))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};