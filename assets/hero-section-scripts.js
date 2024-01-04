
    $(window).on("load", function () {

      // Copy ip button script
      $('.Play-btn').on('click', function () {
        var ipToCopy = mc_server;
        var tempInput = $('<input>');
        $('body').append(tempInput);
        tempInput.val(ipToCopy).select();
        document.execCommand('copy');
        tempInput.remove();
  
        Swal.fire({
          title: 'Server IP Copied!',
          html: '<p>Ip copied successfully. May you have the best times on our server!</p>',        icon: 'success',
          confirmButtonText: 'Okay',
          customClass: {
            actions: 'w-100',
            confirmButton: 'btn btn-success rounded-1 bg-success w-100',
          }
        });
      });


      // Login & show avatar on login popup script
      $(".username-input").eq(0).on("input", function() {
        var usernameInput = $(".username-input").eq(0);
        var img = $(".avatarImg").eq(0);
        var loginNote = $(".login-note").eq(0);
    
        var username = usernameInput.val();

        if (/[^a-zA-Z0-9_]/.test(username)) {
          loginNote.text(username + " is an invalid name!");
          loginNote.removeClass("text-dark").addClass("text-danger");
          img.attr("src", "https://mc-heads.net/avatar/MHF_Exclamation/36");
          return;
      }
  

        if (username.length <= 1) {
            loginNote.text("name is too short !");
            loginNote.removeClass("text-dark").addClass("text-danger");
            img.attr("src", "https://mc-heads.net/avatar/MHF_Exclamation/36");
            return;
        }
    
        var sanitizedUsername = username.replace(/\s/g, "_");
    
        img.attr("src", "https://mc-heads.net/avatar/" + sanitizedUsername + "/36");
    
        loginNote.text("");
        loginNote.removeClass("text-danger").addClass("text-success");
    });
    

        // Show server status script
        let serverStatusIp = mc_server;
        $.ajax({
            url: "https://api.mcsrvstat.us/2/" + serverStatusIp,
            success: function (data) {
                if (data.online) {
                    let online = data.online;
                    let playerCurrentCount = data.players.online;
                    updateStatus(online, playerCurrentCount);
                } else {
                    let online = null;
                    updateStatus(online);
                }
            },
            error: function () {
                $.ajax({
                    url: "https://mcapi.us/server/status?ip=" + serverStatusIp,
                    success: function (data) {
                        if (data.online) {
                            let online = data.online;
                            let playerCurrentCount = data.players.now;
                            updateStatus(online, playerCurrentCount);
                        } else {
                            let online = null;
                            updateStatus(online);
                        }
                    },
                });
            },
            timeout: 300000,
        });
        
        
        function updateStatus(online, current) {
            let statusStatusDiv = $(".server-status");
            if (online) {
                statusStatusDiv.empty();
                if ((current > 1) || (current < 1)) {
                    statusStatusDiv.html("<span class='status-number'>" + current + "</span> " + players_online);
                } else {
                    statusStatusDiv.html("<span class='status-number'>" + current + "</span> " + player_online);
                }
            } else {
                statusStatusDiv.empty();
                statusStatusDiv.text(server_offline);
            }
        }


        let discordStatusID = discord_server;
        $.ajax({
            url: "https://discord.com/api/guilds/" + discordStatusID + "/embed.json",
            success: function (data) {
                let presence_count = data.presence_count;
                updateDiscordStatus(presence_count);
            },
            error: function () {},
            timeout: 300000,
        });

        function updateDiscordStatus(presence_count) {
            let discordStatusDiv = $(".discord-status");
            discordStatusDiv.empty();
            if ((presence_count > 1) || (presence_count < 1)) {
                discordStatusDiv.html("<span class='status-number'>" + presence_count + "</span> " + users_online);
            } else {
                discordStatusDiv.html("<span class='status-number'>" + presence_count + "</span> " + user_online);
            }
        }

    });

var EffectColor = "FFA200";
particlesJS("particles-js", {
              particles: {
                number: {
                  value: 20,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                opacity: {
                  value: 0.7,
                  random: false,
                  anim: {
                    
                    enable: false,
                    speed: 10,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.2,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 2,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity:0,
                    speed: 1,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            });

