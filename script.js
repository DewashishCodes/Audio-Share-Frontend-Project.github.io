window.onload = function () {
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close');
    const contentContainer = document.querySelector('.content_container');

    // Show the modal and blur content container when the page loads
    modal.style.display = 'flex';
    contentContainer.classList.add('blur');

    // Close the modal when the close button is clicked
    closeButton.onclick = function () {
        modal.style.display = 'none';
        contentContainer.classList.remove('blur');
    }

    // Optionally, close the modal if the user clicks outside of it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            contentContainer.classList.remove('blur');
        }
    }
}


const toggleSidebarButton = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main-section');

toggleSidebarButton.onclick = function () {
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';

}

const audio = document.getElementById('audio1');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause'; // Change button text to 'Pause'
    } else {
        audio.pause();
        playButton.textContent = 'Play'; // Change button text back to 'Play'
    }
});

// -----------------------------------------------------ITERATION 1--------------------------------------------

/*  document.addEventListener('DOMContentLoaded', () => {
    const songForm = document.getElementById('songForm');
    const songCards = document.getElementById('songCards');

    // Load existing cards from localStorage
    const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
    existingCards.forEach((cardData, index) => createCard(cardData, index));

    songForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const audioFile = document.getElementById('audioFile').files[0];
        const songTitle = document.getElementById('songTitle').value;
        const byline = document.getElementById('byline').value;
        const coverImage = document.getElementById('coverImage').files[0];

        if (!audioFile || !coverImage) {
            alert("Please select an audio file and a cover image.");
            return;
        }

        const cardData = {
            audioFile: URL.createObjectURL(audioFile),
            songTitle,
            byline,
            coverImage: URL.createObjectURL(coverImage),
        };

        // Get existing cards from localStorage
        const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
        existingCards.push(cardData);
        localStorage.setItem('cards', JSON.stringify(existingCards));

        createCard(cardData, existingCards.length - 1);

        songForm.reset(); // Reset the form after adding the song
    });
});

// Function to create a card
function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${data.coverImage}" alt="${data.songTitle}" style="width: 100%; border-radius: 10px 10px 0 0;">
        <audio src="${data.audioFile}" controls style="display: none;"></audio>
        <div class="card-footer">
            <div class="card-info">
                <p class="text-title">${data.songTitle}</p>
                <p class="text-body">${data.byline} 
                    <button class="playButton" id="playButton">Play</button>
                    <button class="deleteButton">Delete</button>
                </p>
            </div>
        </div>
    `;

    songCards.appendChild(card);

    const audioElement = card.querySelector('audio');
    const newPlayButton = card.querySelector('.playButton');
    const deleteButton = card.querySelector('.deleteButton');

    newPlayButton.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
            newPlayButton.textContent = 'Pause';
        } else {
            audioElement.pause();
            newPlayButton.textContent = 'Play';
        }
    });

    // Handle delete button click
    deleteButton.addEventListener('click', () => {
        // Remove the card from the DOM
        songCards.removeChild(card);

        // Remove from localStorage
        const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
        existingCards.splice(index, 1); // Remove the card from the array
        localStorage.setItem('cards', JSON.stringify(existingCards)); // Update localStorage
    });
}
 

 */
// -----------------------------------------------------ITERATION 2--------------------------------------------

/* document.addEventListener('DOMContentLoaded', () => {
    const songForm = document.getElementById('songForm');
    const songCards = document.getElementById('songCards');

    // Load existing cards from localStorage
    const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
    existingCards.forEach((cardData, index) => createCard(cardData, index));

    songForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const audioFile = document.getElementById('audioFile').files[0];
        const songTitle = document.getElementById('songTitle').value;
        const byline = document.getElementById('byline').value;
        const coverImage = document.getElementById('coverImage').files[0];

        if (!audioFile || !coverImage) {
            alert("Please select an audio file and a cover image.");
            return;
        }

        const audioURL = URL.createObjectURL(audioFile);
        const imgURL = URL.createObjectURL(coverImage);
        
        const cardData = {
            audioFile: audioURL,
            songTitle,
            byline,
            coverImage: imgURL,
        };

        // Get existing cards from localStorage
        const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
        existingCards.push(cardData);
        localStorage.setItem('cards', JSON.stringify(existingCards));

        createCard(cardData, existingCards.length - 1);

        songForm.reset(); // Reset the form after adding the song
    });
});

// Function to create a card
function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${data.coverImage}" alt="${data.songTitle}" style="width: 100%; border-radius: 10px 10px 0 0;">
        <audio src="${data.audioFile}" controls style="display: none;"></audio>
        <div class="card-footer">
            <div class="card-info">
                <p class="text-title">${data.songTitle}</p>
                <p class="text-body">${data.byline} 
                    <button class="playButton" id="playButton">Play</button>
                    <button class="deleteButton">Delete</button>
                </p>
            </div>
        </div>
    `;

    songCards.appendChild(card);

    const audioElement = card.querySelector('audio');
    const newPlayButton = card.querySelector('.playButton');
    const deleteButton = card.querySelector('.deleteButton');

    newPlayButton.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
            newPlayButton.textContent = 'Pause';
        } else {
            audioElement.pause();
            newPlayButton.textContent = 'Play';
        }
    });

    // Handle delete button click
    deleteButton.addEventListener('click', () => {
        // Remove the card from the DOM
        songCards.removeChild(card);

        // Remove from localStorage
        const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
        existingCards.splice(index, 1); // Remove the card from the array
        localStorage.setItem('cards', JSON.stringify(existingCards)); // Update localStorage
    });
} */

// -----------------------------------------------------ITERATION 3--------------------------------------------
/*    document.addEventListener('DOMContentLoaded', () => {
       const songForm = document.getElementById('songForm');
       const songCards = document.getElementById('songCards');
       const footerImage = document.getElementById('footerImage');
       const nowPlaying = document.getElementById('nowPlaying');
       const footerAudio = document.getElementById('footerAudio');
   
       // Load existing cards from localStorage
       const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
       existingCards.forEach((cardData, index) => createCard(cardData, index));
   
       songForm.addEventListener('submit', function(event) {
           event.preventDefault();
   
           const audioFile = document.getElementById('audioFile').files[0];
           const songTitle = document.getElementById('songTitle').value;
           const byline = document.getElementById('byline').value;
           const coverImage = document.getElementById('coverImage').files[0];
   
           if (!audioFile || !coverImage) {
               alert("Please select an audio file and a cover image.");
               return;
           }
   
           const audioURL = URL.createObjectURL(audioFile);
           const imgURL = URL.createObjectURL(coverImage);
           
           const cardData = {
               audioFile: audioURL,
               songTitle,
               byline,
               coverImage: imgURL,
           };
   
           // Get existing cards from localStorage
           const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
           existingCards.push(cardData);
           localStorage.setItem('cards', JSON.stringify(existingCards));
   
           createCard(cardData, existingCards.length - 1);
   
           songForm.reset(); // Reset the form after adding the song
       });
   });
   
   // Function to create a card
   function createCard(data, index) {
       const card = document.createElement('div');
       card.classList.add('card');
   
       card.innerHTML = `
           <img src="${data.coverImage}" alt="${data.songTitle}" style="width: 100%; border-radius: 10px 10px 0 0;">
           <audio src="${data.audioFile}" controls style="display: none;"></audio>
           <div class="card-footer">
               <div class="card-info">
                   <p class="text-title">${data.songTitle}</p>
                   <p class="text-body">${data.byline} 
                       <button class="playButton">Play</button>
                       <button class="deleteButton">Delete</button>
                   </p>
               </div>
           </div>
       `;
   
       songCards.appendChild(card);
   
       const audioElement = card.querySelector('audio');
       const newPlayButton = card.querySelector('.playButton');
       const deleteButton = card.querySelector('.deleteButton');
   
       newPlayButton.addEventListener('click', () => {
           if (audioElement.paused) {
               // Stop other audio if any is playing
               stopAllAudio();
   
               audioElement.play();
               newPlayButton.textContent = 'Pause';
   
               // Update footer with the current track info
               updateFooter(data);
           } else {
               audioElement.pause();
               newPlayButton.textContent = 'Play';
   
               // Also pause the footer audio
               footerAudio.pause();
           }
       });
   
       // Handle delete button click
       deleteButton.addEventListener('click', () => {
           // Remove the card from the DOM
           songCards.removeChild(card);
   
           // Remove from localStorage
           const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
           existingCards.splice(index, 1); // Remove the card from the array
           localStorage.setItem('cards', JSON.stringify(existingCards)); // Update localStorage
       });
   }
   
   // Function to stop all audio elements
   function stopAllAudio() {
       const allAudioElements = document.querySelectorAll('audio');
       allAudioElements.forEach(audio => {
           audio.pause();
           audio.currentTime = 0; // Reset the audio to start
       });
   }
   
   // Function to update the footer with currently playing track info
   function updateFooter(track) {
       const footerImage = document.getElementById('footerImage');
       const nowPlaying = document.getElementById('nowPlaying');
       const footerAudio = document.getElementById('footerAudio');
   
       footerImage.src = track.coverImage;
       nowPlaying.innerHTML = `Now Playing: <span id="trackTitle">${track.songTitle}</span> - <span id="trackArtist">${track.byline}</span>`;
   
       // Update footer audio control
       footerAudio.src = track.audioFile;
       footerAudio.style.display = 'block'; // Ensure controls are visible
       footerAudio.play(); // Start playing the footer audio
   
       // Sync the footer audio with the controls
       footerAudio.onplay = () => {
           const playButton = document.querySelector('.playButton');
           playButton.textContent = 'Pause';
       };
   
       footerAudio.onpause = () => {
           const playButton = document.querySelector('.playButton');
           playButton.textContent = 'Play';
       };
   }
   
*/
 
/* document.addEventListener('DOMContentLoaded', () => {
    const songForm = document.getElementById('songForm');
    const songCards = document.getElementById('songCards');
    const footerAudio = document.getElementById('footerAudio');
    const playPauseButton = document.getElementById('playPauseButton');
    const nextTrackButton = document.getElementById('nextTrackButton');
    const prevTrackButton = document.getElementById('prevTrackButton');

    let currentTrackIndex = -1; // To keep track of the currently playing track
    let existingCards = JSON.parse(localStorage.getItem('cards')) || [];

    // Load existing cards from localStorage
    existingCards.forEach((cardData, index) => createCard(cardData, index));

    songForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const audioFile = document.getElementById('audioFile').files[0];
        const songTitle = document.getElementById('songTitle').value;
        const byline = document.getElementById('byline').value;
        const coverImage = document.getElementById('coverImage').files[0];

        if (!audioFile || !coverImage) {
            alert("Please select an audio file and a cover image.");
            return;
        }

        const cardData = {
            audioFile: URL.createObjectURL(audioFile),
            songTitle,
            byline,
            coverImage: URL.createObjectURL(coverImage),
        };

        // Add new card data to existingCards and update localStorage
        existingCards.push(cardData);
        localStorage.setItem('cards', JSON.stringify(existingCards));

        createCard(cardData, existingCards.length - 1);
        songForm.reset(); // Reset the form after adding the song
    });

    // Function to create a card
    function createCard(data, index) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
                <img src="${data.coverImage}" alt="${data.songTitle}" style="width: 100%; border-radius: 10px 10px 0 0;">
                <audio src="${data.audioFile}" controls style="display: none;"></audio>
                <div class="card-footer">
                    <div class="card-info">
                        <p class="text-title">${data.songTitle}</p>
                        <p class="text-body">${data.byline} 
                            <button class="playButton">Play</button>
                            <button class="deleteButton">Delete</button>
                        </p>
                    </div>
                </div>
            `;

        songCards.appendChild(card);

        const audioElement = card.querySelector('audio');
        const newPlayButton = card.querySelector('.playButton');
        const deleteButton = card.querySelector('.deleteButton');

        newPlayButton.addEventListener('click', () => {
            if (audioElement.paused) {
                audioElement.play();
                newPlayButton.textContent = 'Pause';
                updateFooter(data, index); // Update footer with track info and index
            } else {
                audioElement.pause();
                newPlayButton.textContent = 'Play';
            }
        });

        // Handle delete button click
        deleteButton.addEventListener('click', () => {
            songCards.removeChild(card);
            existingCards.splice(index, 1); // Remove from the array
            localStorage.setItem('cards', JSON.stringify(existingCards)); // Update localStorage
        });
    }

    // Update the footer with currently playing track info
    function updateFooter(track, index) {
        const footerImage = document.getElementById('footerImage');
        const nowPlaying = document.getElementById('nowPlaying');

        footerImage.src = track.coverImage;
        nowPlaying.innerHTML = `Now Playing: <span id="trackTitle">${track.songTitle}</span> - <span id="trackArtist">${track.byline}</span>`;

        footerAudio.src = track.audioFile;
        footerAudio.play(); // Start playing the footer audio
        currentTrackIndex = index; // Update the current track index

        playPauseButton.textContent = 'Pause';

        // Sync play/pause button with footer audio state
        footerAudio.onplay = () => {
            playPauseButton.textContent = 'Pause';
        };

        footerAudio.onpause = () => {
            playPauseButton.textContent = 'Play';
        };

        footerAudio.onended = () => {
            playPauseButton.textContent = 'Play';
            playNextTrack(); // Automatically play next track when current ends
        };
    }

    // Play/Pause button functionality
    playPauseButton.addEventListener('click', () => {
        if (footerAudio.paused) {
            footerAudio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            footerAudio.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // Next track button functionality
    nextTrackButton.addEventListener('click', playNextTrack);

    function playNextTrack() {
        if (currentTrackIndex < existingCards.length - 1) {
            currentTrackIndex++;
        } else {
            currentTrackIndex = 0; // Loop back to first track
        }
        const nextTrack = existingCards[currentTrackIndex];
        updateFooter(nextTrack, currentTrackIndex);
        footerAudio.play(); // Ensure the audio plays for the new track
    }

    // Previous track button functionality
    prevTrackButton.addEventListener('click', playPrevTrack);

    function playPrevTrack() {
        if (currentTrackIndex > 0) {
            currentTrackIndex--;
        } else {
            currentTrackIndex = existingCards.length - 1; // Loop back to last track
        }
        const prevTrack = existingCards[currentTrackIndex];
        updateFooter(prevTrack, currentTrackIndex);
        footerAudio.play(); // Ensure the audio plays for the new track
    }
});


function updateFooter(track, index) {
    const footerImage = document.getElementById('footerImage');
    const nowPlaying = document.getElementById('nowPlaying');
    const glowLine = document.getElementById('glowLine');

    footerImage.src = track.coverImage;
    nowPlaying.innerHTML = `Now Playing: <span id="trackTitle">${track.songTitle}</span> - <span id="trackArtist">${track.byline}</span>`;

    footerAudio.src = track.audioFile;
    footerAudio.play(); // Start playing the footer audio
    currentTrackIndex = index; // Update the current track index

    playPauseButton.textContent = 'Pause';

    // Show the glowing line
    glowLine.style.opacity = '1'; // Make it visible

    footerAudio.onplay = () => {
        playPauseButton.textContent = 'Pause';
        glowLine.style.opacity = '1'; // Show when playing
    };

    footerAudio.onpause = () => {
        playPauseButton.textContent = 'Play';
        glowLine.style.opacity = '0'; // Hide when paused
    };

    footerAudio.onended = () => {
        playPauseButton.textContent = 'Play';
        glowLine.style.opacity = '0'; // Hide when ended
        playNextTrack(); // Automatically play next track when current ends
    };
} 

footerAudio.onplay = () => {
    button.textContent = 'Pause';
    glowLine.style.opacity = '1'; // Show the glow line when playing
};

footerAudio.onpause = () => {
    button.textContent = 'Play';
    glowLine.style.opacity = '0'; // Hide the glow line when paused
};

footerAudio.onended = () => {
    button.textContent = 'Play';
    glowLine.style.opacity = '0'; // Hide the glow line when ended
};


 */



document.addEventListener('DOMContentLoaded', () => {
    const songForm = document.getElementById('songForm');
    const songCards = document.getElementById('songCards');
    const footerAudio = document.getElementById('footerAudio');
    const playPauseButton = document.getElementById('playPauseButton');
    const nextTrackButton = document.getElementById('nextTrackButton');
    const prevTrackButton = document.getElementById('prevTrackButton');
    const glowLine = document.getElementById('glowLine');

    let currentTrackIndex = -1; 
    let existingCards = JSON.parse(localStorage.getItem('cards')) || [];

    existingCards.forEach((cardData, index) => createCard(cardData, index));

    songForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const audioFile = document.getElementById('audioFile').files[0];
        const songTitle = document.getElementById('songTitle').value;
        const byline = document.getElementById('byline').value;
        const coverImage = document.getElementById('coverImage').files[0];

        if (!audioFile || !coverImage) {
            alert("Please select an audio file and a cover image.");
            return;
        }

        const cardData = {
            audioFile: URL.createObjectURL(audioFile),
            songTitle,
            byline,
            coverImage: URL.createObjectURL(coverImage),
        };

        existingCards.push(cardData);
        localStorage.setItem('cards', JSON.stringify(existingCards));
        createCard(cardData, existingCards.length - 1);
        songForm.reset();
    });

    function createCard(data, index) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${data.coverImage}" alt="${data.songTitle}" style="width: 100%; border-radius: 10px 10px 0 0;">
            <audio src="${data.audioFile}" controls style="display: none;"></audio>
            <div class="card-footer">
                <div class="card-info">
                    <p class="text-title">${data.songTitle}</p>
                    <p class="text-body">${data.byline} 
                        <button class="playButton" id="playButton">Play</button>
                        <button class="deleteButton">Delete</button>
                    </p>
                </div>
            </div>
        `;

        songCards.appendChild(card);

        const audioElement = card.querySelector('audio');
        const newPlayButton = card.querySelector('.playButton');
        const deleteButton = card.querySelector('.deleteButton');

       /*  newPlayButton.addEventListener('click', () => {
            if (audioElement.paused) {
                 playTrack(audioElement, data, index);
                //audioElement.pause();
                newPlayButton.textContent = 'Pause';
                console.log("Clicked 1st case");
            } else {
                audioElement.pause();
                newPlayButton.textContent = 'Play';
                console.log("Clicked 2st case");
            }
        }); */

        newPlayButton.addEventListener('click', () => {
            if (audioElement.paused) {
                // Play the audio and update the button text
                playTrack(audioElement, data, index);
            } else {
                // Pause the audio without restarting
                audioElement.pause();
                newPlayButton.textContent = 'Play'; // Update button text to 'Play'
            }
        });
        
        // Function to play the track
        function playTrack(audio, data, index) {
            // Stop any other playing audio first
            stopAllAudio(); // Ensure only one audio plays at a time
        
            audio.play();
            newPlayButton.textContent = 'Pause'; // Change button text to 'Pause'
            updateFooter(data, index); // Update footer with track info
        }
        
        // Function to stop all other audio tracks
        function stopAllAudio() {
            const allAudio = document.querySelectorAll('audio');
            allAudio.forEach(a => {
                if (!a.paused) {
                    a.pause();
                    a.currentTime = 0; // Reset to start
                }
            });
        }
        

        deleteButton.addEventListener('click', () => {
            songCards.removeChild(card);
            existingCards.splice(index, 1);
            localStorage.setItem('cards', JSON.stringify(existingCards));
        });
    }

    function playTrack(audioElement, trackData, index) {
        // Pause any currently playing audio
        footerAudio.pause();
        footerAudio.src = trackData.audioFile;
        footerAudio.play();
        currentTrackIndex = index;
        updateFooter(trackData);

        // Sync footer audio state
        footerAudio.onplay = () => glowLine.style.opacity = '1';
        footerAudio.onpause = () => glowLine.style.opacity = '0';
        footerAudio.onended = () => {
            glowLine.style.opacity = '0';
            playNextTrack();
        };
    }

    function updateFooter(track) {
        const footerImage = document.getElementById('footerImage');
        const nowPlaying = document.getElementById('nowPlaying');

        footerImage.src = track.coverImage;
        nowPlaying.innerHTML = `Now Playing: <span id="trackTitle">${track.songTitle}</span> - <span id="trackArtist">${track.byline}</span>`;
    }

    playPauseButton.addEventListener('click', () => {
        if (footerAudio.paused) {
            footerAudio.play();
            glowLine.style.opacity = '1';
            playPauseButton.textContent = 'Pause';
        } else {
            footerAudio.pause();
            glowLine.style.opacity = '0';
            playPauseButton.textContent = 'Play';
        }
    });

    nextTrackButton.addEventListener('click', playNextTrack);
    prevTrackButton.addEventListener('click', playPrevTrack);

    function playNextTrack() {
        if (currentTrackIndex < existingCards.length - 1) {
            currentTrackIndex++;
        } else {
            currentTrackIndex = 0;
        }
        const nextTrack = existingCards[currentTrackIndex];
        updateFooter(nextTrack);
        footerAudio.src = nextTrack.audioFile;
        footerAudio.play();
    }

    function playPrevTrack() {
        if (currentTrackIndex > 0) {
            currentTrackIndex--;
        } else {
            currentTrackIndex = existingCards.length - 1;
        }
        const prevTrack = existingCards[currentTrackIndex];
        updateFooter(prevTrack);
        footerAudio.src = prevTrack.audioFile;
        footerAudio.play();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const footerAudio = document.getElementById('footerAudio');
    const glowLine = document.getElementById('glowLine');

    // Ensure these elements exist
    if (!footerAudio || !glowLine) {
        console.error('Footer audio or glow line not found.');
        return; // Exit if elements are not found
    }

    footerAudio.onplay = () => {
        glowLine.style.opacity = '1'; // Show the glow line
    };

    footerAudio.onpause = () => {
        glowLine.style.opacity = '0'; // Hide the glow line
    };

    footerAudio.onended = () => {
        glowLine.style.opacity = '0'; // Hide the glow line when ended
        playNextTrack(); // Automatically play the next track
    };

    // Your existing code for creating cards and handling play/pause events
});
