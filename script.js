window.addEventListener('scroll', function() {
    var whatIDo = document.getElementById('whatIDo');
    var windowHeight = window.innerHeight;
    var whatIDoTop = whatIDo.getBoundingClientRect().top;

    var content1Elements = document.querySelectorAll('.content1');
    var content2 = document.querySelector('.content2');

    if (whatIDoTop < windowHeight) {
        content1Elements.forEach(function(content1) {
            var content1Top = content1.getBoundingClientRect().top;
            if (content1Top < windowHeight) {
                var animatedImage = content1.querySelector('.animated-image');
                animatedImage.style.transform = 'translateX(0)';
            }
        });

        var content2Top = content2.getBoundingClientRect().top;
        if (content2Top < windowHeight) {
            var mobileImg = content2.querySelector('.mobile-img');
            mobileImg.style.transform = 'translateX(0)';
        }
    } else {
        document.querySelectorAll('.animated-image').forEach(function(img) {
            img.style.transform = 'translateX(-100%)';
        });
        var mobileImg = content2.querySelector('.mobile-img');
        mobileImg.style.transform = 'translateX(100%)';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

var navBar = document.getElementById('topNav');
var isScrolling;

window.addEventListener('scroll', function() {
    // Clear the timeout while the user is still scrolling
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {
        // Reset the nav bar opacity to 1.0 after scrolling stops
        navBar.style.opacity = '1.0';
    }, 2000); 

    // Change the nav bar opacity to 0.7 while scrolling
    navBar.style.opacity = '0.7';
});

function navigateTo(url) {
    var overlay = document.getElementById('overlay');
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    overlay.style.transform = 'translateY(0)';
    setTimeout(function() {
            window.location.href = url;
        }, 800); 
}

const skillsData = [
    { name: 'HTML', icon: 'assets/html.png', percentage: 92, category: 'Web Development' },
    { name: 'CSS', icon: 'assets/css.png', percentage: 95, category: 'Web Development' },
    { name: 'JavaScript', icon: 'assets/js.png', percentage: 85, category: 'Web Development' },
    { name: 'Php', icon: 'assets/php.png', percentage: 80, category: 'Web Development' },
    { name: 'ASP.Net', icon: 'assets/Aspnet.png', percentage: 85, category: 'Web Development' },
    { name: 'Java', icon: 'assets/Java.png', percentage: 90, category: 'Mobile Development' },
    { name: 'Python', icon: 'assets/Python.png', percentage: 90, category: 'Data Analysis' },
    { name: 'Android Studio', icon: 'assets/as.png', percentage: 90, category: 'Mobile Development' },
    { name: 'Flutter', icon: 'assets/flutter.png', percentage: 95, category: 'Mobile Development' },
    { name: 'SwiftUI', icon: 'assets/Swift.png', percentage: 80, category: 'Mobile Development' },
    { name: 'R Programming', icon: 'assets/r.png', percentage: 85, category: 'Data Analysis' },
    { name: 'Tableau', icon: 'assets/Tableau.png', percentage: 88, category: 'Data Analysis' },
    { name: 'Microsoft SQL', icon: 'assets/sql.png', percentage: 90, category: 'Database Management' },
    { name: 'Firebase', icon: 'assets/firebase.png', percentage: 90, category: 'Database Management' },
    { name: 'MS Office', icon: 'assets/office.png', percentage: 98, category: 'Others' },
    { name: 'Figma', icon: 'assets/Figma.png', percentage: 95, category: 'Others' },
    { name: 'Git', icon: 'assets/git.png', percentage: 90, category: 'Others' },
];

function displaySkillsByCategory() {
    const categories = [...new Set(skillsData.map(skill => skill.category))];
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.innerHTML = ''; // Clear existing content

    categories.forEach(category => {
        // Create category title
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryTitle.classList.add('category-title');
        skillsContainer.appendChild(categoryTitle);

        // Filter and display skills under this category
        const categorySkills = skillsData.filter(skill => skill.category === category);
        categorySkills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill');

            skillElement.innerHTML = `
                <img src="${skill.icon}" alt="${skill.name} Icon" class="skill-icon">
                <div class="skill-bar">
                    <div class="skill-fill" style="width: ${skill.percentage}%;"></div>
                    <div class="skill-percentage">${skill.percentage}%</div>
                    <div class="skill-name">${skill.name}</div>
                </div>
            `;

            skillElement.addEventListener('mouseover', () => {
                const skillName = skillElement.querySelector('.skill-name');
                skillName.style.display = 'block';
            });

            skillElement.addEventListener('mouseout', () => {
                const skillName = skillElement.querySelector('.skill-name');
                skillName.style.display = 'none';
            });

            skillsContainer.appendChild(skillElement);
        });
    });
}

// Call the function to display skills by category
displaySkillsByCategory();