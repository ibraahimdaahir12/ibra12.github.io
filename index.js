document.body.innerHTML = '';
document.body.style.cssText = 'margin: 0; padding: 0; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; background: #080808; color: #66ff03; min-height: 100vh; display: flex; flex-direction: column;';

// Modern Navigation Bar
const nav = document.createElement('nav');
nav.style.cssText = 'background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); padding: 20px 0; position: fixed; width: 100%; top: 0; z-index: 1000; box-shadow: 0 4px 20px rgba(0,0,0,0.1); border-bottom: 2px solid rgba(102, 126, 234, 0.3);';

const navContainer = document.createElement('div');
navContainer.style.cssText = 'max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 30px; position: relative;';

// Logo with gradient
const logo = document.createElement('div');
logo.innerHTML = '<span style="background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 28px; font-weight: 800; letter-spacing: -1px;">Iвяα★</span>';
logo.style.cssText = 'cursor: pointer; display: flex; align-items: center;';
logo.onclick = function () {
    showPage('home');
};

const navLinks = document.createElement('ul');
navLinks.id = 'navLinks';
navLinks.style.cssText = 'display: flex; list-style: none; margin: 0; padding: 0; gap: 5px; align-items: center;';

const pages = ['Home', 'Assignments', 'Contact', 'About'];

pages.forEach(page => {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.textContent = page;
    a.style.cssText = 'color: #333; text-decoration: none; font-size: 15px; font-weight: 600; padding: 12px 20px; border-radius: 25px; transition: all 0.3s ease; cursor: pointer; position: relative;';

    a.onmouseover = function () {
        this.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        this.style.color = 'white';
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
    };

    a.onmouseout = function () {
        this.style.background = 'transparent';
        this.style.color = '#333';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    };

    a.onclick = function () {
        showPage(page.toLowerCase());
    };

    li.appendChild(a);
    navLinks.appendChild(li);
});

const hamburger = document.createElement('button');
hamburger.innerHTML = '☰';
hamburger.id = 'hamburgerBtn';
hamburger.style.cssText = 'display: block; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; font-size: 24px; cursor: pointer; padding: 12px 18px; border-radius: 10px; transition: all 0.3s; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);';

hamburger.onmouseover = function () {
    this.style.transform = 'scale(1.1)';
    this.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.5)';
};

hamburger.onmouseout = function () {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
};

const mobileNav = document.createElement('div');
mobileNav.id = 'mobileNav';
mobileNav.style.cssText = 'display: none; position: absolute; top: 70px; right: 30px; background: white; padding: 25px; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); z-index: 1001; min-width: 220px; border: 1px solid rgba(102, 126, 234, 0.2);';

const mobileNavList = document.createElement('ul');
mobileNavList.style.cssText = 'list-style: none; margin: 0; padding: 0;';

pages.forEach(page => {
    const li = document.createElement('li');
    li.style.cssText = 'margin-bottom: 8px;';

    const a = document.createElement('a');
    a.textContent = page;
    a.style.cssText = 'color: #333; text-decoration: none; font-size: 16px; font-weight: 600; padding: 12px 18px; border-radius: 8px; display: block; cursor: pointer; transition: all 0.3s;';

    a.onmouseover = function () {
        this.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        this.style.color = 'white';
    };

    a.onmouseout = function () {
        this.style.background = 'transparent';
        this.style.color = '#333';
    };

    a.onclick = function () {
        showPage(page.toLowerCase());
    };

    li.appendChild(a);
    mobileNavList.appendChild(li);
});

mobileNav.appendChild(mobileNavList);

hamburger.onclick = function () {
    if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'block';
    }
};

navContainer.appendChild(logo);
navContainer.appendChild(navLinks);
navContainer.appendChild(hamburger);
navContainer.appendChild(mobileNav);
nav.appendChild(navContainer);
document.body.appendChild(nav);

// Global Styles & Animations
const globalStyle = document.createElement('style');
globalStyle.textContent = `
    @media (max-width: 768px) {
        #navLinks { display: none !important; }
        nav { padding: 15px 0 !important; }
        navContainer { padding: 0 15px !important; }
    }
    /* Hamburger is now always visible via inline style, and mobileNav visibility is handled by JS toggle */
    
    @keyframes gradientMove {
        0% { transform: translate(0%, 0%) rotate(0deg); }
        50% { transform: translate(-25%, -25%) rotate(180deg); }
        100% { transform: translate(0%, 0%) rotate(360deg); }
    }
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .float-animation {
        animation: float 6s ease-in-out infinite;
    }
    .fade-in-up {
        animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    /* Scrollbar Styling */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #f1f1f1; }
    ::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #555; }
`;
document.head.appendChild(globalStyle);


const messageDisplay = document.createElement('div');
messageDisplay.id = 'messageDisplay';
messageDisplay.style.cssText = 'position: fixed; top: 0; right: 0; bottom: 0; width: 400px; background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(20px); color: #333; padding: 0; font-family: "Courier New", monospace; font-size: 13px; z-index: 2000; box-shadow: -10px 0 30px rgba(0,0,0,0.1); transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); display: flex; flex-direction: column; border-left: 1px solid rgba(0,0,0,0.05);';

// Header for the sidebar
const messageHeader = document.createElement('div');
messageHeader.style.cssText = 'padding: 20px; background: linear-gradient(135deg, #1a202c, #2d3748); color: white; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1); flex-shrink: 0;';

const messageTitle = document.createElement('div');
messageTitle.innerHTML = '🖥️ Console Output';
messageTitle.style.cssText = 'font-weight: 700; font-size: 16px; letter-spacing: 0.5px;';

const closeBtn = document.createElement('button');
closeBtn.innerHTML = '✕';
closeBtn.style.cssText = 'background: rgba(255,255,255,0.2); color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: center; transition: 0.2s;';
closeBtn.onmouseover = function () { this.style.background = 'rgba(255,255,255,0.3)'; };
closeBtn.onmouseout = function () { this.style.background = 'rgba(255,255,255,0.2)'; };
closeBtn.onclick = function () {
    messageDisplay.style.transform = 'translateX(100%)';
};

const clearMessageBtn = document.createElement('button');
clearMessageBtn.textContent = 'Clear Logs';
clearMessageBtn.style.cssText = 'background: #f56565; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; margin-right: 10px; transition: all 0.3s;';
clearMessageBtn.onclick = function () {
    messageContent.innerHTML = '';
    const emptyState = document.createElement('div');
    emptyState.textContent = 'Docs cleared...';
    emptyState.style.color = '#a0aec0';
    emptyState.style.fontStyle = 'italic';
    emptyState.style.padding = '20px';
    emptyState.style.textAlign = 'center';
    messageContent.appendChild(emptyState);
};

const controls = document.createElement('div');
controls.style.display = 'flex';
controls.alignItems = 'center';
controls.appendChild(clearMessageBtn);
controls.appendChild(closeBtn);

messageHeader.appendChild(messageTitle);
messageHeader.appendChild(controls);

const messageContent = document.createElement('div');
messageContent.id = 'messageContent';
messageContent.style.cssText = 'flex: 1; overflow-y: auto; padding: 20px; background: #f7fafc;';

messageDisplay.appendChild(messageHeader);
messageDisplay.appendChild(messageContent);
document.body.appendChild(messageDisplay);

// Overlay for mobile or focus
const sidebarOverlay = document.createElement('div');
sidebarOverlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.3); z-index: 1999; opacity: 0; visibility: hidden; transition: 0.3s; backdrop-filter: blur(2px);';
sidebarOverlay.onclick = function () {
    messageDisplay.style.transform = 'translateX(100%)';
    this.style.opacity = '0';
    this.style.visibility = 'hidden';
};
document.body.appendChild(sidebarOverlay);

// Function to add messages to display (only shows when called)
function addMessage(message) {
    // Show Sidebar
    messageDisplay.style.transform = 'translateX(0)';
    sidebarOverlay.style.visibility = 'visible';
    sidebarOverlay.style.opacity = '1';

    const newMessage = document.createElement('div');
    newMessage.innerHTML = '<span style="color: #667eea; font-weight: bold;">➜</span> ' + message;
    newMessage.style.cssText = 'margin-bottom: 12px; padding: 12px 15px; background: white; border-radius: 8px; border-left: 3px solid #667eea; font-size: 13px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); animation: fadeInUp 0.3s ease; color: #2d3748; line-height: 1.5; font-family: "Consolas", "Monaco", monospace;';

    messageContent.appendChild(newMessage);
    messageContent.scrollTop = messageContent.scrollHeight;
}


const main = document.createElement('main');
main.style.cssText = 'margin-top: 90px; padding: 40px 30px; max-width: 1400px; margin-left: auto; margin-right: auto; flex: 1; width: 100%; box-sizing: border-box;';
document.body.appendChild(main);

// ============================================
// FOOTER COMPONENT
// ============================================
const footer = document.createElement('footer');
footer.style.cssText = 'background: linear-gradient(to right, #141e30, #243b55); color: white; padding-top: 60px; margin-top: auto; width: 100%; position: relative; z-index: 100; box-shadow: 0 -10px 30px rgba(0,0,0,0.2);';

const footerContent = document.createElement('div');
footerContent.style.cssText = 'max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; padding: 0 30px 50px;';

// Column 1: Brand Info
const col1 = document.createElement('div');
const footerTitle = document.createElement('h3');
footerTitle.innerHTML = 'Iвяα★';
footerTitle.style.cssText = 'font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #667eea, #f5576c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 20px; display: inline-block;';

const footerText = document.createElement('p');
footerText.textContent = 'Empowering developers with clean, efficient, and framework-free JavaScript solutions. Built for performance and simplicity.';
footerText.style.cssText = 'color: #a0aec0; font-size: 15px; line-height: 1.8; margin-bottom: 25px;';

// Socials (Moved to Col 1)
const socialLinks = document.createElement('div');
socialLinks.style.cssText = 'display: flex; gap: 15px;';

const socials = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/ibraahimdaahir12' },
    { name: 'Email', icon: '✉️', url: 'mailto:ibraahimd353@gmail.com' },
    { name: 'LinkedIn', icon: '👔', url: '#' }
];

socials.forEach(social => {
    const link = document.createElement('a');
    link.textContent = social.icon;
    link.href = social.url || '#';
    link.title = social.name;
    link.style.cssText = 'color: white; text-decoration: none; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 50%; transition: all 0.3s; font-size: 18px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer;';

    link.onmouseover = function () {
        this.style.background = '#667eea';
        this.style.transform = 'translateY(-3px)';
        this.style.borderColor = '#667eea';
    };
    link.onmouseout = function () {
        this.style.background = 'rgba(255,255,255,0.05)';
        this.style.transform = 'translateY(0)';
        this.style.borderColor = 'rgba(255,255,255,0.1)';
    };
    socialLinks.appendChild(link);
});

col1.appendChild(footerTitle);
col1.appendChild(footerText);
col1.appendChild(socialLinks);


// Column 2: Quick Links
const col2 = document.createElement('div');
const col2Title = document.createElement('h4');
col2Title.textContent = 'Quick Links';
col2Title.style.cssText = 'font-size: 18px; font-weight: 700; margin-bottom: 25px; color: white; position: relative; padding-bottom: 10px; border-bottom: 2px solid #667eea; display: inline-block;';

const linksList = document.createElement('ul');
linksList.style.cssText = 'list-style: none; padding: 0; margin: 0;';

const links = ['Home', 'Assignments', 'Create Account', 'About Us'];
links.forEach(linkText => {
    const li = document.createElement('li');
    li.style.cssText = 'margin-bottom: 12px;';

    const a = document.createElement('a');
    a.textContent = linkText;
    a.style.cssText = 'color: #a0aec0; text-decoration: none; transition: 0.3s; font-size: 15px; cursor: pointer; display: inline-block;';
    a.onmouseover = function () { this.style.color = '#667eea'; this.style.transform = 'translateX(5px)'; };
    a.onmouseout = function () { this.style.color = '#a0aec0'; this.style.transform = 'translateX(0)'; };

    // Simple navigation logic
    a.onclick = function () {
        if (linkText === 'Create Account') showPage('contact');
        else if (linkText === 'About Us') showPage('about');
        else showPage(linkText.toLowerCase());
    };

    li.appendChild(a);
    linksList.appendChild(li);
});

col2.appendChild(col2Title);
col2.appendChild(linksList);


// Column 3: Newsletter
const col3 = document.createElement('div');
const col3Title = document.createElement('h4');
col3Title.textContent = 'Stay Updated';
col3Title.style.cssText = 'font-size: 18px; font-weight: 700; margin-bottom: 25px; color: white; position: relative; padding-bottom: 10px; border-bottom: 2px solid #f5576c; display: inline-block;';

const newsText = document.createElement('p');
newsText.textContent = 'Subscribe to our newsletter for the latest JavaScript tips and portfolio updates.';
newsText.style.cssText = 'color: #a0aec0; font-size: 15px; line-height: 1.6; margin-bottom: 20px;';

const newsForm = document.createElement('div');
newsForm.style.cssText = 'display: flex; gap: 10px;';

const newsInput = document.createElement('input');
newsInput.placeholder = 'Enter email address';
newsInput.style.cssText = 'flex: 1; padding: 12px 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: white; outline: none; font-size: 14px;';
newsInput.onfocus = function () { this.style.borderColor = '#667eea'; };
newsInput.onblur = function () { this.style.borderColor = 'rgba(255,255,255,0.1)'; };

const newsBtn = document.createElement('button');
newsBtn.textContent = '🚀';
newsBtn.style.cssText = 'background: #667eea; border: none; padding: 12px 18px; border-radius: 8px; cursor: pointer; transition: 0.3s; font-size: 16px;';
newsBtn.onmouseover = function () { this.style.background = '#764ba2'; };
newsBtn.onmouseout = function () { this.style.background = '#667eea'; };
newsBtn.onclick = function () { alert('Subscribed successfully!'); newsInput.value = ''; };

newsForm.appendChild(newsInput);
newsForm.appendChild(newsBtn);

col3.appendChild(col3Title);
col3.appendChild(newsText);
col3.appendChild(newsForm);


footerContent.appendChild(col1);
footerContent.appendChild(col2);
footerContent.appendChild(col3);

const copyrightContainer = document.createElement('div');
copyrightContainer.style.cssText = 'background: rgba(0,0,0,0.2); text-align: center; padding: 20px; border-top: 1px solid rgba(255,255,255,0.05);';

const copyright = document.createElement('p');
copyright.innerHTML = '&copy; 2025 <strong>Ibraahim Daahir Muuse</strong>. All Rights Reserved.';
copyright.style.cssText = 'color: #718096; font-size: 14px; margin: 0;';

copyrightContainer.appendChild(copyright);

footer.appendChild(footerContent);
footer.appendChild(copyrightContainer);
document.body.appendChild(footer);


function showPage(pageName) {
    // Clear main content
    main.innerHTML = '';

    // Show selected page
    if (pageName === 'home') showHome();
    else if (pageName === 'assignments') showAssignments();
    else if (pageName === 'contact') showContact();
    else if (pageName === 'about') showAbout();

    // DON'T add message when switching pages
}


function showHome() {
    const page = document.createElement('div');
    page.style.cssText = 'position: relative; min-height: calc(100vh - 150px); width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px 20px;';

    // Hero Section with animated gradient background
    const heroSection = document.createElement('div');
    heroSection.style.cssText = 'width: 100%; max-width: 1200px; text-align: center; padding: 60px 40px; background: white; border-radius: 25px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); position: relative; overflow: hidden;';

    // Animated gradient overlay
    const gradientOverlay = document.createElement('div');
    gradientOverlay.style.cssText = 'position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05), rgba(102, 126, 234, 0.05)); animation: gradientMove 15s ease infinite; z-index: 0;';

    const contentWrapper = document.createElement('div');
    contentWrapper.style.cssText = 'position: relative; z-index: 1;';

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Welcome to <span style="background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Iвяα★\'s</span> Digital Space';
    h1.style.cssText = 'font-size: 52px; margin-bottom: 20px; font-weight: 800; letter-spacing: -1px; color: #2d3748; line-height: 1.2;';
    h1.className = 'float-animation';

    const subtitle = document.createElement('p');
    subtitle.innerHTML = 'Crafting elegant solutions with pure JavaScript. No frameworks, just logic and creativity.<br><span style="color: #667eea; font-size: 20px; font-weight: 600; display: block; margin-top: 15px;">Built with 100% Experience & Passion</span>';
    subtitle.style.cssText = 'color: #4a5568; font-size: 18px; margin-bottom: 50px; line-height: 1.7; max-width: 800px; margin-left: auto; margin-right: auto;';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 900px; margin: 0 auto;';

    const startBtn1 = document.createElement('button');
    startBtn1.innerHTML = '<div style="font-size: 36px; margin-bottom: 12px;">👨‍💻</div><div style="font-size: 22px; font-weight: 700; margin-bottom: 8px;">About Me</div><div style="font-size: 14px; opacity: 0.8;">Get to know me</div>';
    startBtn1.style.cssText = 'background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 40px 30px; border-radius: 20px; cursor: pointer; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4); display: flex; flex-direction: column; align-items: center; justify-content: center;';

    startBtn1.onmouseover = function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.5)';
    };

    startBtn1.onmouseout = function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
    };

    startBtn1.onclick = function () {
        showPage('about');
    };

    const startBtn2 = document.createElement('button');
    startBtn2.innerHTML = '<div style="font-size: 36px; margin-bottom: 12px;">⚡</div><div style="font-size: 22px; font-weight: 700; margin-bottom: 8px;">Live Demos</div><div style="font-size: 14px; opacity: 0.8;">Object Manipulation</div>';
    startBtn2.style.cssText = 'background: linear-gradient(135deg, #f093fb, #f5576c); color: white; border: none; padding: 40px 30px; border-radius: 20px; cursor: pointer; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 10px 30px rgba(245, 87, 108, 0.4); display: flex; flex-direction: column; align-items: center; justify-content: center;';

    startBtn2.onmouseover = function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 15px 40px rgba(245, 87, 108, 0.5)';
    };

    startBtn2.onmouseout = function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(245, 87, 108, 0.4)';
    };

    startBtn2.onclick = function () {
        showPage('assignments');
        setTimeout(() => {
            const part2Section = document.querySelector('[style*="Part 2: Object Manipulation Examples"]');
            if (part2Section) {
                part2Section.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    runPart2Examples();
                }, 500);
            }
        }, 100);
    };

    buttonsContainer.appendChild(startBtn1);
    buttonsContainer.appendChild(startBtn2);

    const instruction = document.createElement('div');
    instruction.style.cssText = 'margin-top: 50px; padding: 25px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); border-radius: 15px; border: 1px solid rgba(102, 126, 234, 0.2);';

    const instructionTitle = document.createElement('div');
    instructionTitle.textContent = '� Explore My Work';
    instructionTitle.style.cssText = 'color: #667eea; font-size: 22px; font-weight: 700; margin-bottom: 12px;';

    const instructionText = document.createElement('div');
    instructionText.textContent = 'Select a path above to see my latest projects and code experiments. Built for performance and designed for users.';
    instructionText.style.cssText = 'color: #4a5568; font-size: 16px; line-height: 1.6;';

    instruction.appendChild(instructionTitle);
    instruction.appendChild(instructionText);

    contentWrapper.appendChild(h1);
    contentWrapper.appendChild(subtitle);
    contentWrapper.appendChild(buttonsContainer);
    contentWrapper.appendChild(instruction);

    heroSection.appendChild(gradientOverlay);
    heroSection.appendChild(contentWrapper);
    page.appendChild(heroSection);

    main.innerHTML = '';
    main.appendChild(page);
}
// ============================================
// ASSIGNMENTS PAGE - TWO PARTS
// ============================================
function showAssignments() {
    const page = document.createElement('div');
    page.className = 'fade-in-up';

    // PART 1: Chapter Examples Header
    const part1Header = document.createElement('div');
    part1Header.style.cssText = 'background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); padding: 35px; border-radius: 20px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid rgba(255, 255, 255, 0.5);';

    const part1Title = document.createElement('h2');
    part1Title.innerHTML = '📖 <span style="background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Part 1: Chapter Examples</span> <span style="color: #667eea; font-size: 18px; font-weight: normal;">(9 per Chapter)</span>';
    part1Title.style.cssText = 'color: #2d3748; margin-bottom: 25px; font-size: 28px; font-weight: 700;';

    const chapterTabs = document.createElement('div');
    chapterTabs.style.cssText = 'display: flex; gap: 15px; margin-bottom: 20px; flex-wrap: wrap;';

    const chapters = [
        { id: 'ch7', name: 'Chapter 7: Objects', color: '#667eea' },
        { id: 'ch8', name: 'Chapter 8: DOM', color: '#764ba2' },
        { id: 'ch9', name: 'Chapter 9: Events', color: '#f093fb' }
    ];

    const contentArea = document.createElement('div');
    contentArea.id = 'chapterContentArea';

    chapters.forEach(chapter => {
        const tabBtn = document.createElement('button');
        tabBtn.textContent = chapter.name;
        tabBtn.style.cssText = `background: ${chapter.color}; color: white; border: none; padding: 14px 28px; border-radius: 10px; cursor: pointer; font-size: 15px; font-weight: 600; transition: all 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.1);`;

        tabBtn.onmouseover = function () {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
        };

        tabBtn.onmouseout = function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        };

        tabBtn.onclick = function () {
            document.querySelectorAll('.chapter-content').forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(chapter.id + 'Content').style.display = 'block';

            chapterTabs.querySelectorAll('button').forEach(btn => {
                btn.style.opacity = '0.7';
            });
            this.style.opacity = '1';
            this.style.transform = 'scale(1.05)';
        };

        chapterTabs.appendChild(tabBtn);
    });

    part1Header.appendChild(part1Title);
    part1Header.appendChild(chapterTabs);
    page.appendChild(part1Header);

    // Create chapter contents (9 examples each)
    createChapter7Examples(contentArea);
    createChapter8Examples(contentArea);
    createChapter9Examples(contentArea);

    page.appendChild(contentArea);

    // PART 2: 
    const part2Header = document.createElement('div');
    part2Header.style.cssText = 'background: white; padding: 30px; border-radius: 15px; margin-top: 40px; margin-bottom: 30px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); border: 1px solid rgba(245, 87, 108, 0.2);';

    const part2Title = document.createElement('h2');
    part2Title.innerHTML = '⚙ <span style="background: linear-gradient(135deg, #f093fb, #f5576c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Part 2: Object Manipulation Examples</span>';
    part2Title.style.cssText = 'color: #2d3748; margin-bottom: 20px; font-size: 28px; font-weight: 700;';

    const runPart2Btn = document.createElement('button');
    runPart2Btn.textContent = '▶ Run All Part 2 Examples';
    runPart2Btn.style.cssText = 'background: linear-gradient(135deg, #f093fb, #f5576c); color: white; border: none; padding: 14px 30px; border-radius: 10px; cursor: pointer; font-size: 16px; font-weight: 600; transition: all 0.3s; box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);';

    runPart2Btn.onmouseover = function () {
        this.style.transform = 'translateY(-2px) scale(1.05)';
        this.style.boxShadow = '0 6px 20px rgba(245, 87, 108, 0.5)';
    };

    runPart2Btn.onmouseout = function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(245, 87, 108, 0.4)';
    };

    runPart2Btn.onclick = function () {
        runPart2Examples();
    };

    part2Header.appendChild(part2Title);
    part2Header.appendChild(runPart2Btn);
    page.appendChild(part2Header);

    // Part 2 Code Display
    const part2Code = document.createElement('div');
    part2Code.style.cssText = 'background: white; padding: 30px; border-radius: 15px; margin-bottom: 30px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); border: 1px solid rgba(102, 126, 234, 0.2);';

    const codeTitle = document.createElement('h3');
    codeTitle.textContent = '💻 Part 2 JavaScript Code:';
    codeTitle.style.cssText = 'color: #2d3748; margin-bottom: 20px; font-size: 22px; font-weight: 700;';

    const codeBlock = document.createElement('div');
    codeBlock.textContent = `// 1: House object
let house = {
    owner: "Mr. Ibraahim",
    location: "Ceelasha",
    rooms: 5
};

let employee = {
    fullName: "Ibraahim Daahir Muuse",
    position: "Software Developer",
    salary: 1600
};

// 3: Constructor Function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let car3 = new Car("hoomey", "buruuj V16", 2024);

// 4: Laptop object
let laptop = {
    name: "HP elitebook",
    processor: "Core i7",
    year: 2026
};

// 5: Countries array
let countries = [
    { name: "Somalia", capital: "Ceelasha", population: 17000000 },
    { name: "Kenya", capital: "Ceelasha", population: 54000000 },
    { name: "Turkey", capital: "Ceelasha", population: 85000000 },
    { name: "Qatar", capital: "Ceelasha", population: 2900000 }
];

// OBJECT MANIPULATION EXAMPLES
// 1. Change object property
let houseE = { owner: "Mr. Ibraahim", location: "Ceelasha", rooms: 5 };
houseE.rooms = 6;

// 2. Add new property
let employeeE = { fullName: "Ibraahim Daahir", position: "Developer", salary: 1600 };
employeeE.department = "IT";

// 3. Object method
let person = {
    name: "IBRAAHIM",
    greet: function() {
        return "Hello " + this.name;
    }
};

// 4. Loop examples
// 5. JSON operations
let student = { name: "IBRAAHIM", age: 22, major: "ICT" };
let studentJSON = JSON.stringify(student);
let studentObj = JSON.parse(studentJSON);`;
    codeBlock.style.cssText = 'background: #1a202c; color: #68d391; padding: 25px; border-radius: 10px; font-family: "Courier New", monospace; font-size: 14px; white-space: pre-wrap; overflow-x: auto; border: 1px solid rgba(102, 126, 234, 0.3); line-height: 1.8;';

    part2Code.appendChild(codeTitle);
    part2Code.appendChild(codeBlock);
    page.appendChild(part2Code);

    main.appendChild(page);

    // Activate first chapter by default
    setTimeout(() => {
        chapterTabs.querySelector('button').click();
    }, 100);
}

// ============================================
// CHAPTER 7 EXAMPLES (9 Examples)
// ============================================
function createChapter7Examples(container) {
    const chapter7 = document.createElement('div');
    chapter7.id = 'ch7Content';
    chapter7.className = 'chapter-content';
    chapter7.style.cssText = 'display: block;';

    // Example 1
    chapter7.appendChild(createExample(
        '1. Basic Object Creation',
        `const person = {
    name: "Ibraahim",
    age: 25,
    city: "Ceelasha"
};`,
        'Run Example 1',
        function () {
            const person = {
                name: "Ibraahim",
                age: 25,
                city: "Ceelasha"
            };
            addMessage('Person Object:');
            addMessage('Name: ' + person.name);
            addMessage('Age: ' + person.age);
            addMessage('City: ' + person.city);
        }
    ));

    // Example 2
    chapter7.appendChild(createExample(
        '2. Object with Methods',
        `const calculator = {
    add: function(a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};`,
        'Run Example 2',
        function () {
            const calculator = {
                add: function (a, b) {
                    return a + b;
                },
                multiply: function (a, b) {
                    return a * b;
                }
            };
            addMessage('Calculator Methods:');
            addMessage('5 + 3 = ' + calculator.add(5, 3));
            addMessage('5 * 3 = ' + calculator.multiply(5, 3));
        }
    ));

    // Example 3
    chapter7.appendChild(createExample(
        '3. Constructor Function',
        `function Student(name, id, grade) {
    this.name = name;
    this.id = id;
    this.grade = grade;
    this.getInfo = function() {
        return this.name + " (" + this.id + ")";
    };
}`,
        'Run Example 3',
        function () {
            function Student(name, id, grade) {
                this.name = name;
                this.id = id;
                this.grade = grade;
                this.getInfo = function () {
                    return this.name + " (" + this.id + ")";
                };
            }
            const student1 = new Student("Ali", "S001", "A");
            addMessage('Student Object:');
            addMessage(student1.getInfo());
            addMessage('Grade: ' + student1.grade);
        }
    ));

    // Example 4
    chapter7.appendChild(createExample(
        '4. Accessing Object Properties',
        `const book = {
    title: "JavaScript Guide",
    author: "Ibraahim Daahir",
    pages: 350,
    price: 29.99
};`,
        'Run Example 4',
        function () {
            const book = {
                title: "JavaScript Guide",
                author: "Ibraahim Daahir",
                pages: 350,
                price: 29.99
            };
            addMessage('Book Properties:');
            addMessage('Title: ' + book.title);
            addMessage('Author: ' + book.author);
            addMessage('Pages: ' + book.pages);
            addMessage('Price: $' + book.price);
        }
    ));

    // Example 5
    chapter7.appendChild(createExample(
        '5. Modifying Object Properties',
        `const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};`,
        'Run Example 5',
        function () {
            const car = {
                brand: "Toyota",
                model: "Camry",
                year: 2020
            };
            addMessage('Original Car: ' + car.brand + ' ' + car.model);
            car.year = 2023;
            car.color = "Blue";
            addMessage('Modified Car:');
            addMessage('Year: ' + car.year);
            addMessage('Color: ' + car.color);
        }
    ));

    // Example 6
    chapter7.appendChild(createExample(
        '6. for...in Loop',
        `const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    yellow: "#ffff00"
};`,
        'Run Example 6',
        function () {
            const colors = {
                red: "#ff0000",
                green: "#00ff00",
                blue: "#0000ff",
                yellow: "#ffff00"
            };
            addMessage('Color Object Properties:');
            for (let key in colors) {
                addMessage(key + ': ' + colors[key]);
            }
        }
    ));

    // Example 7
    chapter7.appendChild(createExample(
        '7. Object.keys and Object.values',
        `const product = {
    id: 101,
    name: "Laptop",
    price: 999.99,
    inStock: true
};`,
        'Run Example 7',
        function () {
            const product = {
                id: 101,
                name: "Laptop",
                price: 999.99,
                inStock: true
            };
            addMessage('Object.keys: ' + Object.keys(product).join(', '));
            addMessage('Object.values: ' + Object.values(product).join(', '));
        }
    ));

    // Example 8
    chapter7.appendChild(createExample(
        '8. JSON Stringify',
        `const user = {
    username: "ibraahim",
    email: "ibraahimd353@gmail.com",
    active: true,
    lastLogin: "2023-12-19"
};`,
        'Run Example 8',
        function () {
            const user = {
                username: "ibraahim",
                email: "ibraahimd353@gmail.com",
                active: true,
                lastLogin: "2023-12-19"
            };
            const jsonString = JSON.stringify(user);
            addMessage('JSON String:');
            addMessage(jsonString);
        }
    ));

    // Example 9
    chapter7.appendChild(createExample(
        '9. JSON Parse',
        `const jsonData = '{"name":"Ibraahim","age":30,"city":"Ceelasha"}';
const obj = JSON.parse(jsonData);`,
        function () {
            const jsonData = '{"name":"Ibraahim","age":30,"city":"Ceelasha"}';
            const obj = JSON.parse(jsonData);
            addMessage('Parsed Object:');
            addMessage('Name: ' + obj.name);
            addMessage('Age: ' + obj.age);
            addMessage('City: ' + obj.city);
        }
    ));

    container.appendChild(chapter7);
}

// ============================================
// CHAPTER 8 EXAMPLES (9 Examples)
// ============================================
function createChapter8Examples(container) {
    const chapter8 = document.createElement('div');
    chapter8.id = 'ch8Content';
    chapter8.className = 'chapter-content';
    chapter8.style.cssText = 'display: none;';

    // Example 1
    chapter8.appendChild(createExample(
        '1. getElementById',
        `const element = document.getElementById('demo');
element.textContent = "Text changed";
element.style.color = "blue";`,
        'Run Example 1',
        function () {
            const demoDiv = document.createElement('div');
            demoDiv.id = 'demo';
            demoDiv.textContent = 'Original Text';
            demoDiv.style.cssText = 'padding: 10px; margin: 10px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';
            main.appendChild(demoDiv);

            setTimeout(() => {
                const element = document.getElementById('demo');
                element.textContent = "Text changed with JavaScript";
                element.style.color = "#3498db";
                element.style.fontWeight = "bold";
                addMessage('Element modified using getElementById');
            }, 500);
        }
    ));

    // Example 2
    chapter8.appendChild(createExample(
        '2. querySelector',
        `const firstDiv = document.querySelector('div');
const firstButton = document.querySelector('button');`,
        'Run Example 2',
        function () {
            addMessage('Total div elements: ' + document.querySelectorAll('div').length);
            addMessage('Total button elements: ' + document.querySelectorAll('button').length);
        }
    ));

    // Example 3
    chapter8.appendChild(createExample(
        '3. querySelectorAll',
        `const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(p => {
    p.style.border = "1px solid blue";
});`,
        'Run Example 3',
        function () {
            const demoP1 = document.createElement('p');
            demoP1.textContent = 'Paragraph 1';
            demoP1.style.cssText = 'padding: 10px; margin: 5px 0;';

            const demoP2 = document.createElement('p');
            demoP2.textContent = 'Paragraph 2';
            demoP2.style.cssText = 'padding: 10px; margin: 5px 0;';

            main.appendChild(demoP1);
            main.appendChild(demoP2);

            const allParagraphs = document.querySelectorAll('p');
            allParagraphs.forEach(p => {
                p.style.border = "2px solid #3498db";
                p.style.padding = "10px";
                p.style.borderRadius = "5px";
            });

            addMessage('Styled ' + allParagraphs.length + ' paragraph elements');
        }
    ));

    // Example 4
    chapter8.appendChild(createExample(
        '4. createElement',
        `const newDiv = document.createElement('div');
newDiv.textContent = "New Element Created";
document.body.appendChild(newDiv);`,
        'Run Example 4',
        function () {
            const newDiv = document.createElement('div');
            newDiv.textContent = "New Element Created with JavaScript";
            newDiv.style.cssText = 'background: #3498db; color: white; padding: 15px; margin: 10px 0; border-radius: 8px; text-align: center;';
            main.appendChild(newDiv);
            addMessage('New element created and added to page');
        }
    ));

    // Example 5
    chapter8.appendChild(createExample(
        '5. innerHTML vs textContent',
        `// textContent sets plain text
div1.textContent = "<strong>Text</strong>";
// innerHTML parses HTML
div2.innerHTML = "<strong>HTML</strong>";`,
        'Run Example 5',
        function () {
            const container = document.createElement('div');
            container.style.cssText = 'display: flex; gap: 20px; margin: 15px 0;';

            const div1 = document.createElement('div');
            div1.textContent = "<strong>Using textContent</strong>";
            div1.style.cssText = 'flex: 1; padding: 15px; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';

            const div2 = document.createElement('div');
            div2.innerHTML = "<strong>Using innerHTML</strong>";
            div2.style.cssText = 'flex: 1; padding: 15px; background: #f8f9fa; border-radius: 5px; border: 1px solid #3498db; color: #3498db;';

            container.appendChild(div1);
            container.appendChild(div2);
            main.appendChild(container);

            addMessage('Left: textContent shows tags as text');
            addMessage('Right: innerHTML parses HTML tags');
        }
    ));

    // Example 6
    chapter8.appendChild(createExample(
        '6. classList Methods',
        `element.classList.add('active');
element.classList.remove('old-class');
element.classList.toggle('hidden');`,
        'Run Example 6',
        function () {
            const demoElement = document.createElement('div');
            demoElement.textContent = 'ClassList Demo';
            demoElement.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 8px; border: 1px solid #ddd; text-align: center;';

            main.appendChild(demoElement);

            demoElement.classList.add('active');
            addMessage('Added class: active');

            setTimeout(() => {
                demoElement.style.background = '#e8f4fc';
                demoElement.style.borderColor = '#3498db';
                addMessage('Changed element style');
            }, 1000);
        }
    ));

    // Example 7
    chapter8.appendChild(createExample(
        '7. Style Manipulation',
        `element.style.backgroundColor = "blue";
element.style.color = "white";
element.style.fontSize = "20px";
element.style.padding = "15px";`,
        'Run Example 7',
        function () {
            const styleBox = document.createElement('div');
            styleBox.textContent = "Style Manipulation Example";
            styleBox.style.cssText = 'padding: 15px; margin: 15px 0; background: #f8f9fa; border: 1px solid #ddd; text-align: center; border-radius: 5px;';

            main.appendChild(styleBox);

            setTimeout(() => {
                styleBox.style.backgroundColor = "#3498db";
                styleBox.style.color = "white";
                styleBox.style.fontSize = "18px";
                styleBox.style.padding = "20px";
                styleBox.style.border = "2px solid #2c3e50";
                addMessage('Styles dynamically changed');
            }, 1000);
        }
    ));

    // Example 8
    chapter8.appendChild(createExample(
        '8. Attribute Manipulation',
        `element.setAttribute('id', 'new-id');
element.getAttribute('class');
element.hasAttribute('data-custom');`,
        'Run Example 8',
        function () {
            const attrDemo = document.createElement('div');
            attrDemo.textContent = "Attribute Demo";
            attrDemo.style.cssText = 'padding: 15px; margin: 15px 0; background: #f8f9fa; border: 1px solid #ddd; text-align: center; border-radius: 5px;';

            main.appendChild(attrDemo);

            attrDemo.setAttribute('id', 'demo-element');
            attrDemo.setAttribute('data-custom', 'custom-value');

            addMessage('ID attribute: ' + attrDemo.getAttribute('id'));
            addMessage('Custom attribute: ' + attrDemo.getAttribute('data-custom'));
            addMessage('Has data-custom? ' + attrDemo.hasAttribute('data-custom'));
        }
    ));

    // Example 9
    chapter8.appendChild(createExample(
        '9. Remove Element',
        `const element = document.getElementById('to-remove');
element.parentNode.removeChild(element);`,
        'Run Example 9',
        function () {
            const toRemove = document.createElement('div');
            toRemove.id = 'to-remove';
            toRemove.textContent = 'This element will be removed in 2 seconds';
            toRemove.style.cssText = 'padding: 15px; margin: 15px 0; background: #f8f9fa; border: 1px solid #ddd; border-radius: 5px; text-align: center;';

            main.appendChild(toRemove);

            addMessage('Element created. Will remove in 2 seconds...');

            setTimeout(() => {
                if (toRemove.parentNode) {
                    toRemove.parentNode.removeChild(toRemove);
                    addMessage('Element removed successfully');
                }
            }, 2000);
        }
    ));

    container.appendChild(chapter8);
}

// ============================================
// CHAPTER 9 EXAMPLES (9 Examples)
// ============================================
function createChapter9Examples(container) {
    const chapter9 = document.createElement('div');
    chapter9.id = 'ch9Content';
    chapter9.className = 'chapter-content';
    chapter9.style.cssText = 'display: none;';

    // Example 1
    chapter9.appendChild(createExample(
        '1. Click Event',
        `button.addEventListener('click', function() {
    this.textContent = "Clicked!";
    this.style.background = "blue";
});`,
        'Run Example 1',
        function () {
            const clickBtn = document.createElement('button');
            clickBtn.textContent = "Click Me";
            clickBtn.style.cssText = 'background: #3498db; color: white; border: none; padding: 12px 25px; border-radius: 5px; cursor: pointer; margin: 15px 0;';

            clickBtn.addEventListener('click', function () {
                this.textContent = "Clicked!";
                this.style.background = "#2c3e50";
                addMessage('Button click event fired');
            });

            main.appendChild(clickBtn);
        }
    ));

    // Example 2
    chapter9.appendChild(createExample(
        '2. Mouse Events',
        `element.addEventListener('mouseover', function() {
    this.style.background = "blue";
});
element.addEventListener('mouseout', function() {
    this.style.background = "white";
});`,
        'Run Example 2',
        function () {
            const mouseBox = document.createElement('div');
            mouseBox.textContent = "Hover Over Me";
            mouseBox.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border: 1px solid #ddd; text-align: center; border-radius: 5px; cursor: pointer;';

            mouseBox.addEventListener('mouseover', function () {
                this.style.background = "#3498db";
                this.style.color = "white";
                addMessage('Mouse over event');
            });

            mouseBox.addEventListener('mouseout', function () {
                this.style.background = "#f8f9fa";
                this.style.color = "#333";
                addMessage('Mouse out event');
            });

            main.appendChild(mouseBox);
        }
    ));

    // Example 3
    chapter9.appendChild(createExample(
        '3. Keyboard Events',
        `document.addEventListener('keydown', function(e) {
    console.log("Key pressed:", e.key);
});`,
        'Run Example 3',
        function () {
            const keyInfo = document.createElement('div');
            keyInfo.innerHTML = '<div style="margin-bottom: 10px;">Press any key...</div><div id="keyDisplay" style="color: #3498db; font-size: 18px; margin-top: 10px;">-</div>';
            keyInfo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd; text-align: center;';

            main.appendChild(keyInfo);

            const keyDisplay = document.getElementById('keyDisplay');

            document.addEventListener('keydown', function (e) {
                keyDisplay.textContent = 'Key: ' + e.key + ' (Code: ' + e.code + ')';
                addMessage('Key pressed: ' + e.key);
            });

            addMessage('Keyboard events activated. Press any key.');
        }
    ));

    // Example 4
    chapter9.appendChild(createExample(
        '4. Input Event',
        `input.addEventListener('input', function(e) {
    console.log("Input value:", e.target.value);
});`,
        'Run Example 4',
        function () {
            const inputDemo = document.createElement('div');
            inputDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';

            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.placeholder = "Type something...";
            inputField.style.cssText = 'width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; color: #333; box-sizing: border-box;';

            const counter = document.createElement('div');
            counter.textContent = "Characters: 0";
            counter.style.cssText = 'color: #3498db; margin-top: 10px;';

            inputField.addEventListener('input', function (e) {
                const length = e.target.value.length;
                counter.textContent = "Characters: " + length;
                addMessage('Input changed: "' + e.target.value + '" (' + length + ' chars)');
            });

            inputDemo.appendChild(inputField);
            inputDemo.appendChild(counter);
            main.appendChild(inputDemo);
        }
    ));

    // Example 5
    chapter9.appendChild(createExample(
        '5. Focus/Blur Events',
        `input.addEventListener('focus', function() {
    this.style.borderColor = "blue";
});
input.addEventListener('blur', function() {
    this.style.borderColor = "gray";
});`,
        'Run Example 5',
        function () {
            const focusDemo = document.createElement('div');
            focusDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';

            const focusInput = document.createElement('input');
            focusInput.type = 'text';
            focusInput.placeholder = "Click here to focus, then click away";
            focusInput.style.cssText = 'width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 4px; color: #333; box-sizing: border-box; transition: border-color 0.3s;';

            focusInput.addEventListener('focus', function () {
                this.style.borderColor = "#3498db";
                addMessage('Input focused');
            });

            focusInput.addEventListener('blur', function () {
                this.style.borderColor = "#ddd";
                addMessage('Input blurred (lost focus)');
            });

            focusDemo.appendChild(focusInput);
            main.appendChild(focusDemo);
        }
    ));

    // Example 6
    chapter9.appendChild(createExample(
        '6. Form Submit Event',
        `form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Form submitted");
});`,
        'Run Example 6',
        function () {
            const formDemo = document.createElement('form');
            formDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';

            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.placeholder = "Your Name";
            nameInput.style.cssText = 'width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px; color: #333; box-sizing: border-box;';

            const submitBtn = document.createElement('button');
            submitBtn.type = 'submit';
            submitBtn.textContent = "Submit";
            submitBtn.style.cssText = 'background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; width: 100%;';

            formDemo.addEventListener('submit', function (e) {
                e.preventDefault();
                addMessage('Form submit prevented');
                addMessage('Name entered: ' + (nameInput.value || '(empty)'));
                nameInput.value = '';
            });

            formDemo.appendChild(nameInput);
            formDemo.appendChild(submitBtn);
            main.appendChild(formDemo);
        }
    ));

    // Example 7
    chapter9.appendChild(createExample(
        '7. Event Delegation',
        `parent.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        console.log("Button clicked:", e.target.textContent);
    }
});`,
        'Run Example 7',
        function () {
            const delegationDemo = document.createElement('div');
            delegationDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';

            const buttonContainer = document.createElement('div');
            buttonContainer.id = 'buttonContainer';
            buttonContainer.style.cssText = 'display: flex; gap: 10px; flex-wrap: wrap;';

            for (let i = 1; i <= 3; i++) {
                const btn = document.createElement('button');
                btn.textContent = 'Button ' + i;
                btn.style.cssText = 'background: #3498db; color: white; border: 1px solid #2c3e50; padding: 8px 15px; border-radius: 4px; cursor: pointer;';
                buttonContainer.appendChild(btn);
            }

            buttonContainer.addEventListener('click', function (e) {
                if (e.target.tagName === 'BUTTON') {
                    e.target.style.background = "#2c3e50";
                    addMessage('Button clicked via delegation: ' + e.target.textContent);

                    setTimeout(() => {
                        e.target.style.background = "#3498db";
                    }, 1000);
                }
            });

            delegationDemo.innerHTML = '<div style="color: #666; margin-bottom: 10px;">Click any button (single event listener on parent):</div>';
            delegationDemo.appendChild(buttonContainer);
            main.appendChild(delegationDemo);
        }
    ));

    // Example 8
    chapter9.appendChild(createExample(
        '8. Prevent Default',
        `link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("Default action prevented");
});`,
        'Run Example 8',
        function () {
            const preventDemo = document.createElement('div');
            preventDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';

            const demoLink = document.createElement('a');
            demoLink.href = '#';
            demoLink.textContent = "Click Me (Prevented)";
            demoLink.style.cssText = 'color: #3498db; text-decoration: none; padding: 10px 15px; background: white; border-radius: 4px; display: inline-block; cursor: pointer; border: 1px solid #3498db;';

            demoLink.addEventListener('click', function (e) {
                e.preventDefault();
                this.style.background = "#3498db";
                this.style.color = "white";
                addMessage('Default link behavior prevented');

                setTimeout(() => {
                    this.style.background = "white";
                    this.style.color = "#3498db";
                }, 1000);
            });

            preventDemo.appendChild(demoLink);
            main.appendChild(preventDemo);
        }
    ));

    // Example 9
    chapter9.appendChild(createExample(
        '9. Event Bubbling',
        `child.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log("Child clicked");
});
parent.addEventListener('click', function() {
    console.log("Parent clicked");
});`,
        'Run Example 9',
        function () {
            const bubblingDemo = document.createElement('div');
            bubblingDemo.style.cssText = 'padding: 20px; margin: 15px 0; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;';

            const parentDiv = document.createElement('div');
            parentDiv.id = 'parentDiv';
            parentDiv.style.cssText = 'padding: 25px; background: white; border: 2px solid #3498db; border-radius: 5px; margin-bottom: 10px;';
            parentDiv.textContent = "PARENT DIV (click me)";
            parentDiv.style.color = "#2c3e50";
            parentDiv.style.textAlign = "center";

            const childDiv = document.createElement('div');
            childDiv.id = 'childDiv';
            childDiv.style.cssText = 'padding: 15px; background: #f8f9fa; border: 2px solid #2c3e50; border-radius: 5px; margin: 10px auto; max-width: 250px;';
            childDiv.textContent = "CHILD DIV (click me - stops bubbling)";
            childDiv.style.color = "#2c3e50";
            childDiv.style.textAlign = "center";
            childDiv.style.cursor = "pointer";

            parentDiv.appendChild(childDiv);

            parentDiv.addEventListener('click', function () {
                this.style.background = "#e8f4fc";
                addMessage('Parent div clicked (bubbling)');

                setTimeout(() => {
                    this.style.background = "white";
                }, 1000);
            });

            childDiv.addEventListener('click', function (e) {
                e.stopPropagation();
                this.style.background = "#3498db";
                this.style.color = "white";
                addMessage('Child div clicked (bubbling stopped)');

                setTimeout(() => {
                    this.style.background = "#f8f9fa";
                    this.style.color = "#2c3e50";
                }, 1000);
            });

            bubblingDemo.appendChild(parentDiv);
            main.appendChild(bubblingDemo);
        }
    ));

    container.appendChild(chapter9);
}

// Helper function to create example cards
function createExample(title, code, buttonText, clickHandler) {
    const example = document.createElement('div');
    example.style.cssText = 'background: white; border-radius: 12px; padding: 25px; margin-bottom: 20px; border: 1px solid rgba(102, 126, 234, 0.2); box-shadow: 0 3px 15px rgba(0,0,0,0.08); transition: all 0.3s;';

    example.onmouseover = function () {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
        this.style.borderColor = 'rgba(102, 126, 234, 0.4)';
    };

    example.onmouseout = function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 3px 15px rgba(0,0,0,0.08)';
        this.style.borderColor = 'rgba(102, 126, 234, 0.2)';
    };

    const exampleTitle = document.createElement('h3');
    exampleTitle.textContent = title;
    exampleTitle.style.cssText = 'color: #2d3748; margin-bottom: 15px; font-size: 20px; font-weight: 700;';

    const codeBlock = document.createElement('div');
    codeBlock.textContent = code;
    codeBlock.style.cssText = 'background: #1a202c; color: #68d391; padding: 20px; border-radius: 8px; font-family: "Courier New", monospace; font-size: 13px; margin-bottom: 15px; white-space: pre-wrap; overflow-x: auto; border: 1px solid rgba(102, 126, 234, 0.3); line-height: 1.6;';

    const runBtn = document.createElement('button');
    runBtn.textContent = '▶ ' + buttonText;
    runBtn.style.cssText = 'background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; transition: all 0.3s; box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);';

    runBtn.onmouseover = function () {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
    };

    runBtn.onmouseout = function () {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 3px 10px rgba(102, 126, 234, 0.3)';
    };

    runBtn.onclick = function () {
        messageDisplay.style.display = 'block';
        addMessage('Running: ' + title);
        clickHandler();
    };

    example.appendChild(exampleTitle);
    example.appendChild(codeBlock);
    example.appendChild(runBtn);

    return example;
}

// ============================================
// PART 2 EXAMPLES the past assinments
// ============================================
function runPart2Examples() {
    addMessage('=== PART 2: OBJECT MANIPULATION EXAMPLES ===');

    // 1: House object
    addMessage('1. HOUSE OBJECT:');
    let house = {
        owner: "Mr. Muaawiya",
        location: "Hodan, Mogadishu",
        rooms: 5
    };
    addMessage("   Owner: " + house.owner);
    addMessage("   Location: " + house.location);
    addMessage("   Rooms: " + house.rooms);

    // 2: Employee object
    addMessage('2. EMPLOYEE OBJECT:');
    let employee = {
        fullName: "Auub yuusuf alasow",
        position: "Software Developer",
        salary: 1600
    };
    addMessage("   Full Name: " + employee.fullName);
    addMessage("   Position: " + employee.position);
    addMessage("   Salary: $" + employee.salary);

    // 3: Constructor Function
    addMessage('3. CAR OBJECT (Constructor):');
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    let car3 = new Car("hoomey", "buruuj V16", 2024);
    addMessage("   Brand: " + car3.brand);
    addMessage("   Model: " + car3.model);
    addMessage("   Year: " + car3.year);

    // 4: Laptop object
    addMessage('4. LAPTOP OBJECT:');
    let laptop = {
        name: "HP elitebook",
        processor: "Core i7",
        year: 2026
    };
    addMessage("   Name: " + laptop.name);
    addMessage("   Processor: " + laptop.processor);
    addMessage("   Year: " + laptop.year);

    // 5: Countries array
    addMessage('5. COUNTRIES LIST:');
    let countries = [
        { name: "Somalia", capital: "Mogadishu", population: 17000000 },
        { name: "kenya", capital: "Nairobi", population: 54000000 },
        { name: "Turkey", capital: "Ankara", population: 85000000 },
        { name: "Qatar", capital: "Doha", population: 2900000 }
    ];
    for (let i = 0; i < countries.length; i++) {
        addMessage("   Country: " + countries[i].name);
        addMessage("   Capital: " + countries[i].capital);
        addMessage("   Population: " + countries[i].population.toLocaleString());
    }

    // Object Manipulation
    addMessage('=== OBJECT MANIPULATION EXAMPLES ===');

    // 1. Change object property
    addMessage('1. House Object (modified):');
    let houseE = { owner: "Mr. Muaawiya", location: "Hodan", rooms: 5 };
    houseE.rooms = 6;
    addMessage("   Rooms (changed from 5 to 6): " + houseE.rooms);

    // 2. Add new property
    addMessage('2. Employee Object (with new property):');
    let employeeE = { fullName: "Ayuub yuusuf", position: "Developer", salary: 1600 };
    employeeE.department = "IT";
    addMessage("   Department (added): " + employeeE.department);

    // 3. Method in object
    addMessage('3. Person Object with Method:');
    let person = {
        name: "AYUUB",
        greet: function () {
            return "Hello " + this.name;
        }
    };
    addMessage("   Method result: " + person.greet());

    // 4. Loop examples
    addMessage('4.1 for...in Loop (House):');
    for (let key in house) {
        addMessage("   " + key + ": " + house[key]);
    }

    // 5. JSON creation
    addMessage('5. JSON String (Student):');
    let student = { name: "JAMIILA", age: 22, major: "ICT" };
    let studentJSON = JSON.stringify(student);
    addMessage("   " + studentJSON);

    // 6. JSON to object
    addMessage('6. Object from JSON:');
    let studentObj = JSON.parse(studentJSON);
    addMessage("   Name: " + studentObj.name);
    addMessage("   Age: " + studentObj.age);
    addMessage("   Major: " + studentObj.major);

    addMessage('=== END OF PART 2 EXAMPLES ===');
}
// ============================================
//COLUMNS LAYOUT
// ============================================
// ============================================
// COLUMNS LAYOUT
// ============================================
// ============================================
// COLUMNS LAYOUT
// ============================================
function showAbout() {
    const page = document.createElement('div');
    page.className = 'fade-in-up';
    page.style.cssText = 'background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 25px; padding: 50px; margin-bottom: 30px; border: 1px solid rgba(255, 255, 255, 0.2); max-width: 1000px; margin: 0 auto; box-shadow: 0 20px 50px rgba(0,0,0,0.1); display: flex; flex-direction: column; align-items: center;';

    // 1. CENTERED PROFILE SECTION
    const profileSection = document.createElement('div');
    profileSection.style.cssText = 'text-align: center; margin-bottom: 50px; width: 100%;';

    // Profile Image Container (Centered & Large)
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = 'width: 250px; height: 250px; margin: 0 auto 30px; position: relative; overflow: hidden; border-radius: 50%; border: 6px solid #2c3e50; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: transform 0.3s;';

    imageContainer.onmouseover = function () {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    };
    imageContainer.onmouseout = function () {
        this.style.transform = 'scale(1) rotate(0deg)';
    };

    const profileImg = document.createElement('img');
    profileImg.src = 'WhatsApp Image 2025-12-27 at 23.46.55_f98a68d1.jpg';
    profileImg.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';

    imageContainer.appendChild(profileImg);
    profileSection.appendChild(imageContainer);

    // Name and Main Title (Large Text)
    const name = document.createElement('h1');
    name.textContent = 'Ibraahim Daahir Muuse';
    name.style.cssText = 'color: #2c3e50; margin-bottom: 15px; font-size: 42px; font-weight: 800; letter-spacing: -1px; text-shadow: 2px 2px 0px rgba(0,0,0,0.05);';

    const role = document.createElement('p');
    role.textContent = 'Networking and Security Student';
    role.style.cssText = 'color: #667eea; font-size: 24px; font-weight: 600; margin-bottom: 25px;';

    // Quick Details
    const quickDetails = document.createElement('div');
    quickDetails.style.cssText = 'display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-bottom: 20px;';

    const detailsData = [
        { label: 'ID', value: 'c6240166' },
        { label: 'Uni', value: 'Jamhriya University' },
        { label: 'Class', value: 'CN242' }
    ];

    detailsData.forEach(item => {
        const span = document.createElement('span');
        span.innerHTML = `<span style="color: #888; font-size: 18px;">${item.label}:</span> <span style="color: #333; font-weight: bold; font-size: 20px;">${item.value}</span>`;
        span.style.cssText = 'padding: 10px 20px; background: rgba(0,0,0,0.03); border-radius: 50px;';
        quickDetails.appendChild(span);
    });

    profileSection.appendChild(name);
    profileSection.appendChild(role);
    profileSection.appendChild(quickDetails);


    // 2. WIDE INFO GRID (Contact & Skills)
    const infoGrid = document.createElement('div');
    infoGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px; width: 100%;';

    // --- Contact Card ---
    const contactCard = document.createElement('div');
    contactCard.style.cssText = 'background: white; padding: 40px; border-radius: 20px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s;';
    contactCard.onmouseover = function () { this.style.transform = 'translateY(-5px)'; };
    contactCard.onmouseout = function () { this.style.transform = 'translateY(0)'; };

    const contactTitle = document.createElement('h3');
    contactTitle.innerHTML = '📞 Contact Info';
    contactTitle.style.cssText = 'color: #2c3e50; margin-bottom: 30px; font-size: 28px; font-weight: 700; border-bottom: 3px solid #667eea; padding-bottom: 15px; display: inline-block;';

    contactCard.appendChild(contactTitle);

    const contactList = [
        { icon: '✉️', label: 'Email', value: 'ibraahimd353@gmail.com' },
        { icon: '📱', label: 'Phone', value: '611131420' },
        { icon: '🎓', label: 'Major', value: 'Networking & Security' },
        { icon: '🚀', label: 'Project', value: 'E-Learning Platform' }
    ];

    contactList.forEach(item => {
        const row = document.createElement('div');
        row.style.cssText = 'display: flex; align-items: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px dashed #eee;';

        row.innerHTML = `
            <div style="font-size: 32px; margin-right: 20px;">${item.icon}</div>
            <div>
                <div style="color: #888; font-size: 16px; margin-bottom: 5px;">${item.label}</div>
                <div style="color: #2c3e50; font-size: 22px; font-weight: 600;">${item.value}</div>
            </div>
        `;
        contactCard.appendChild(row);
    });

    // --- Skills Card ---
    const skillsCard = document.createElement('div');
    skillsCard.style.cssText = 'background: white; padding: 40px; border-radius: 20px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s;';
    skillsCard.onmouseover = function () { this.style.transform = 'translateY(-5px)'; };
    skillsCard.onmouseout = function () { this.style.transform = 'translateY(0)'; };

    const skillsTitle = document.createElement('h3');
    skillsTitle.innerHTML = '⚡ Technical Skills';
    skillsTitle.style.cssText = 'color: #2c3e50; margin-bottom: 30px; font-size: 28px; font-weight: 700; border-bottom: 3px solid #f5576c; padding-bottom: 15px; display: inline-block;';

    skillsCard.appendChild(skillsTitle);

    const skills = [
        { name: 'JavaScript / ES6+', level: 98, color: '#FFD700' },
        { name: 'HTML5 & SEO', level: 100, color: '#FF4500' },
        { name: 'CSS3 & Animations', level: 95, color: '#00BFFF' },
        { name: 'React.js', level: 90, color: '#61DAFB' },
        { name: 'Node.js & APIs', level: 85, color: '#32CD32' }
    ];

    skills.forEach(skill => {
        const skillRow = document.createElement('div');
        skillRow.style.cssText = 'margin-bottom: 25px;';

        const header = document.createElement('div');
        header.style.cssText = 'display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 18px; font-weight: 600; color: #333;';
        header.innerHTML = `<span>${skill.name}</span><span>${skill.level}%</span>`;

        const barBg = document.createElement('div');
        barBg.style.cssText = 'height: 12px; background: #eee; border-radius: 6px; overflow: hidden;';

        const barFill = document.createElement('div');
        barFill.style.cssText = `height: 100%; width: 0%; background: ${skill.color}; border-radius: 6px; transition: width 1.5s ease-in-out;box-shadow: 0 0 10px ${skill.color}50;`;

        barBg.appendChild(barFill);
        skillRow.appendChild(header);
        skillRow.appendChild(barBg);
        skillsCard.appendChild(skillRow);

        // Animate bars after render
        setTimeout(() => {
            barFill.style.width = skill.level + '%';
        }, 300);
    });

    infoGrid.appendChild(contactCard);
    infoGrid.appendChild(skillsCard);

    page.appendChild(profileSection);
    page.appendChild(infoGrid);

    main.innerHTML = '';
    main.appendChild(page);
}

// ============================================
// CONTACT / REGISTRATION PAGE
// ============================================
function showContact() {
    const page = document.createElement('div');
    page.className = 'fade-in-up';
    page.style.cssText = 'display: flex; justify-content: center; align-items: center; padding: 40px 20px; min-height: 60vh;';

    // Form Container (Glassmorphism)
    const container = document.createElement('div');
    container.style.cssText = 'background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); width: 100%; max-width: 500px; padding: 40px; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); border: 1px solid rgba(255,255,255,0.5); position: relative; overflow: hidden;';

    // Decorative Circle
    const circle = document.createElement('div');
    circle.style.cssText = 'position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; opacity: 0.5; filter: blur(20px);';
    container.appendChild(circle);

    const title = document.createElement('h2');
    title.innerHTML = '🚀 Create Account';
    title.style.cssText = 'text-align: center; color: #2d3748; font-size: 32px; font-weight: 800; margin-bottom: 10px; position: relative; z-index: 1;';

    const subtitle = document.createElement('p');
    subtitle.textContent = "Join us today! It's free and easy.";
    subtitle.style.cssText = 'text-align: center; color: #718096; margin-bottom: 30px; font-size: 16px;';

    const form = document.createElement('form');
    form.style.cssText = 'display: flex; flex-direction: column; gap: 20px; position: relative; z-index: 1;';
    form.id = 'regForm';

    // Error Message Container
    const errorMsg = document.createElement('div');
    errorMsg.style.cssText = 'color: #e53e3e; background: #fff5f5; border: 1px solid #fed7d7; padding: 10px; border-radius: 8px; font-size: 14px; display: none; text-align: center;';
    form.appendChild(errorMsg);

    // Input Fields
    const inputsConfig = [
        { id: 'fullName', type: 'text', placeholder: 'Full Name', icon: '👤' },
        { id: 'email', type: 'email', placeholder: 'Email Address', icon: '✉️' },
        { id: 'password', type: 'password', placeholder: 'Password (min 6 chars)', icon: '🔒' },
        { id: 'confirmPassword', type: 'password', placeholder: 'Confirm Password', icon: '🔐' }
    ];

    const formInputs = {}; // To store references

    inputsConfig.forEach(inputData => {
        const inputGroup = document.createElement('div');
        inputGroup.style.cssText = 'position: relative;';

        const icon = document.createElement('span');
        icon.textContent = inputData.icon;
        icon.style.cssText = 'position: absolute; left: 15px; top: 50%; transform: translateY(-50%); font-size: 16px; opacity: 0.7;';

        const input = document.createElement('input');
        input.type = inputData.type;
        input.id = inputData.id;
        input.placeholder = inputData.placeholder;
        input.style.cssText = 'width: 100%; padding: 15px 15px 15px 45px; border: 2px solid #e2e8f0; border-radius: 12px; font-size: 15px; outline: none; transition: 0.3s; background: #f8fafc; color: #2d3748; box-sizing: border-box;';

        input.onfocus = function () {
            this.style.borderColor = '#667eea';
            this.style.background = 'white';
            this.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.1)';
        };
        input.onblur = function () {
            this.style.borderColor = '#e2e8f0';
            this.style.background = '#f8fafc';
            this.style.boxShadow = 'none';
        };

        formInputs[inputData.id] = input;

        inputGroup.appendChild(icon);
        inputGroup.appendChild(input);
        form.appendChild(inputGroup);
    });

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Register Now';
    submitBtn.style.cssText = 'background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 16px; border-radius: 12px; font-size: 16px; font-weight: 700; cursor: pointer; transition: 0.3s; margin-top: 10px; box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);';

    submitBtn.onmouseover = function () {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.4)';
    };
    submitBtn.onmouseout = function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.3)';
    };

    submitBtn.onclick = function (e) {
        e.preventDefault();

        // Validation Logic
        const fullName = formInputs.fullName.value.trim();
        const email = formInputs.email.value.trim();
        const password = formInputs.password.value;
        const confirmPassword = formInputs.confirmPassword.value;

        // Reset error
        errorMsg.style.display = 'none';
        errorMsg.textContent = '';

        if (!fullName || !email || !password || !confirmPassword) {
            showError('Please fill in all fields.');
            return;
        }

        if (password.length < 6) {
            showError('Password must be at least 6 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            showError('Passwords do not match.');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            showError('Please enter a valid email address.');
            return;
        }

        // Success
        alert('🎉 Registration Successful! Welcome, ' + fullName + '!');
        // clear inputs
        Object.values(formInputs).forEach(input => input.value = '');
    };

    function showError(msg) {
        errorMsg.textContent = '⚠️ ' + msg;
        errorMsg.style.display = 'block';
        // Shake animation
        form.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 300
        });
    }

    form.appendChild(submitBtn);
    container.appendChild(title);
    container.appendChild(subtitle);
    container.appendChild(form);

    page.appendChild(container);
    main.appendChild(page);
}