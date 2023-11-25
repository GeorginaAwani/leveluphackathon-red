document.addEventListener('DOMContentLoaded', function () {
    // Shopify icon click event
    const shopifyIcon = document.querySelector('.logo img');
    shopifyIcon.addEventListener('click', function () {
        window.location.href = 'https://shopify.com';
    });

    // Search box focus event
    const searchBarInput = document.querySelector('.search-bar input');
    searchBarInput.addEventListener('focus', function () {
    });

    // Notification bell click event
    const notificationIcon = document.querySelector('.notification-icon img');
    const notificationDropdown = document.querySelector('.notification-dropdown');

    notificationIcon.addEventListener('click', function () {
        // Toggle visibility of the notification dropdown
        notificationDropdown.classList.toggle('show');
    });

    // Store name and profile image click event
    const userProfile = document.querySelector('.user-profile');
    const userMenu = document.querySelector('.user-menu');

    userProfile.addEventListener('click', function () {
        // Toggle visibility of the user menu

        userMenu.classList.toggle('show');
        
    });

     // Store references to the user profile block and the user menu
     const userProfileBlock = document.querySelector('.user-actions.user-profile');

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.notification-icon') && notificationDropdown.classList.contains('show')) {
        userProfileBlock.classList.toggle('close-menu');
            notificationDropdown.classList.remove('show');

        }

        if (!event.target.closest('.user-profile') && userMenu.classList.contains('show')) {
        userProfileBlock.classList.toggle('close-menu');
            
            userMenu.classList.remove('show');

        }
    });
    

   
    // Add a click event listener to the user profile block
    userProfileBlock.addEventListener('click', function () {

        // Toggle the 'open-menu' class on the user profile block
        userProfileBlock.classList.toggle('open-menu');
    });
    // Redirect on menu item click
    const menuItems = document.querySelectorAll('.user-menu-item');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            // window.location.href = '';
        });
    });

    // Close icon (X) click event
    const closeIcon = document.querySelector('.close-icon-container');

    closeIcon.addEventListener('click', function () {
        // Toggle visibility of the trial info
        const trialInfo = document.querySelector('.trial-info');
        const dashboardHeader = document.querySelector('.dashboard-header');

        dashboardHeader.classList.toggle('hidden');
    });


   
});

function toggleStagesList() {
    var stagesList = document.getElementById("stagesList");

if(stagesList.style.display == "none" ){

    stagesList.style.display ="block" ;

}else {

    stagesList.style.display ="none" ;
 

}
    var stagesListVisible =false;
    if(stagesList.style.display == "block"){
        stagesListVisible = true
    }else{
        stagesListVisible = false

    }
    


    var arrowHidden = document.getElementById('arrowHidden');
    var arrowVisible = document.getElementById('arrowVisible');

    // Toggle visibility based on the stagesListVisible variable
    if (stagesListVisible) {

         arrowHidden.style.display = 'block';
        arrowVisible.style.display = 'none';
    } else {
        console.log(22)
 arrowHidden.style.display = 'none';
        arrowVisible.style.display = 'block';
      
    }
console.log("check check")
}



