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
        // console.log(22)
 arrowHidden.style.display = 'none';
        arrowVisible.style.display = 'block';
      
    }
console.log("check check")
}



function toggleDetails(element) {
    var details = element.querySelector('.card-content');

    var allDetails = document.querySelectorAll('.stages-list li .card-content');
  
    var activeStage = document.querySelector('.stages-list li.active');

        allDetails.forEach(function(item) {
            if (item !== details) {
                item.style.display = 'none';
           

            }else{
                console.log("yollo")
console.log(details.style.display )
            if(details.style.display == 'none' || details.style.display == ''){
                details.style.display ='inline-flex'
                element.classList.add('active');
        
            }else{
                element.classList.remove('active');
            }
            }
            
           
      
    });
     // Remove 'active' class from previously active stage
      
    if (activeStage && activeStage !== element) {
        activeStage.classList.remove('active');
    }
   

}


// function toggleDetailsTick(element) {
//     var listItem = element.closest('li');
//     toggleDetails(listItem); // Toggle the details for the clicked stage
//     var loadingSvg = listItem.querySelector('.loading-svg');
//     var initialSvg = listItem.querySelector('.initial-svg');
//     var tickSvg = listItem.querySelector('.tick-svg');

//     loadingSvg.style.display = 'inline-block';
//     initialSvg.style.display = 'none';

//     setTimeout(function () {
//         loadingSvg.style.display = 'none';
//         tickSvg.style.display = 'inline-block';
//         initialSvg.style.display = 'none';
//         //listener to remove the tick svg if clicked on
//         tickSvg.addEventListener('click', function() {
//             resetSvg(listItem);
//             updateProgress();
//         });
//     }, 500);
// }
function toggleDetailsTick(element) {
    var listItem = element.closest('li');
    toggleDetails(listItem); // Toggle the details for the clicked stage

    var loadingSvg = listItem.querySelector('.loading-svg');
    var initialSvg = listItem.querySelector('.initial-svg');
    var tickSvg = listItem.querySelector('.tick-svg');

    loadingSvg.style.display = 'inline-block';
    initialSvg.style.display = 'none';

    setTimeout(function () {
        loadingSvg.style.display = 'none';
        tickSvg.style.display = 'inline-block';
        initialSvg.style.display = 'none';

        // Listener to remove the tick svg if clicked on
        tickSvg.addEventListener('click', function () {
            resetSvg(listItem);
            updateProgress(); // Update progress after removing tick
        });
        
        updateProgress(); // Update progress after ticking
    }, 500);
}

function resetSvg(element) {
    var initialSvg = element.querySelector('.initial-svg');
    var tickSvg = element.querySelector('.tick-svg');
    initialSvg.style.display = 'inline-block';
    tickSvg.style.display = 'none';
}

function updateProgress() {
    var allTickSvg = document.querySelectorAll('.tick-svg');
    var totalStages = 5; // Set the total number of stages here
    var completedStages = 0;

    // Count the number of ticked stages
    allTickSvg.forEach(function (tickSvg) {
    console.log(tickSvg.style.display);
    if (tickSvg.style.display == 'inline-block' ) {
        completedStages++;
    }


    });
    console.log(completedStages);


    // Update progress rate text
    var progressRate = document.querySelector('.progress-rate');
    var progressBar = document.querySelector('.progress-indicator');

    // Calculate progress percentage
    var progressPercentage = (completedStages / totalStages) * 100;

    // Update progress rate text
    progressRate.textContent = `${completedStages}/${totalStages} completed`;

    // Update progress bar width
    progressBar.style.width = `${progressPercentage}%`;
}


