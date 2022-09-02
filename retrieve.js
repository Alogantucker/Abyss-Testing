//const Guild = require("../../schemas/guild");
const Song = require("../schemas/songSchema");
//const { SlashCommandBuilder } = require("discord.js");
const mongoose = require("mongoose");
const format = require('../functionalFunctions/format.js');
const fileCheck = require('../functionalFunctions/fileCheck.js');

console.log("Retrieval Started . . . . . . . . . . . . . loading");
//const Person = mongoose.model('Person'  , yourSchema);
module.exports = async function retrieve(what, input, songName, replyTo, channels, counter, reply) {
  let songFile = 'songFile';
  let coverArt = 'coverArt';
  let snippet = 'snippet';
  let session = 'session';
  let info = 'info';
  let era = 'era';
  let results = await Song.find({ title: songName }, (err) => {if(err){console.log(`An Error occured during search : ${err}`)}}).clone();
//let results = await Song.find({ title: songName }).exec();
    // Get Song Link
    switch (what) {
      case songFile:

        // if there is at least one result that matches the songName
        if (results.length) {
          // send each song File that exists for said song
          // for every result found
         for (const result of results){
            //if there is at least one link present in the song's songFile array
            if (result.songFile[0]) {
            // for every String within the songFile array
          for (const file of result.songFile){
            let resultsArray = format(file);
            for (const resultFile of resultsArray){
              console.log(`Checking > . > . > . > song # ${counter}`);
            if (fileCheck(resultFile)) {
                    channels.sendTyping();
                    channels.send({  files: [`${entry}`]});
                  console.log(`\nSent Song File # (${counter+1})`);
                  counter++;
              } else {
                channels.sendTyping();
                channels.send(`${entry}`);
                console.log(`\nSent Song Link # (${counter+1})`);
                counter++;
              }
            }
            }
          }
          // if there isnt a song File link existing in the current song result
        }

      replyTo.reply({
        content: `✅ **Search Complete** ✅\n \[ ${counter} \] ***${input}*** **Results Found :** `,
        ephemeral: true,
      });
    } else {
      replyTo.reply({
        content: `❌ **No Results For** ***${input}***\n *please try again* ❌`,
        ephemeral: true,
      });
    }



        break;


        case coverArt:

          // if there is at least one result that matches the songName
          console.log(`Song Name = ${songName}`);
          console.log(`Results  & Length : ${results} & ${results.length}`);
        if (results.length) {
          // send each song File that exists for said song

          // for every result found
          for (const result of results){
            //if there is at least one link present in the song's songFile array
            if (result.coverFile[0]) {
            // for every String within the songFile array
          for (const file of result.coverFile){
            let resultsArray = format(file);
            for (const resultFile of resultsArray){
              console.log(`Checking > . > . > . > Cover # ${counter}`);
            if (fileCheck(resultFile)) {
              channels.sendTyping();
                channels.send({  files: [`${resultFile}`]});
              console.log(`\nSent Cover Art File # (${counter+1})`);
              counter++;
            } else {
              channels.sendTyping();
              channels.send(`${resultFile}`);
              console.log(`\nSent Cover Art Link # (${counter+1})`)
              counter++;
            }
          }
          }
        }
      }
          replyTo.reply({
          content: `✅ **Search Complete** ✅\n \[ ${counter} \] ***${input}*** **Results Found :** `,
          ephemeral: true,
        });
      } else {
        replyTo.reply({
          content: `❌ **No Results For** ***${input}***\n *please try again* ❌`,
          ephemeral: true,
        });
      }



          break;


  // Get Snippets
          case snippet:

            // if there is at least one result that matches the songName
            if (results.length) {
              // send each song File that exists for said song
              // for every result found
             for (const result of results){
                //if there is at least one link present in the song's songFile array
                if (result.snipFile[0]) {
                // for every String within the songFile array
              for (const file of result.snipFile){
                let resultsArray = format(file);
                for (const resultFile of resultsArray){
                  console.log(`Checking > . > . > . > Snippet # ${counter}`);
                if (fileCheck(resultFile)) {
                      channels.sendTyping();
                        channels.send({  files: [`${entry}`]});
                      console.log(`\nSent Snippet File # (${counter+1})`);
                      counter++;
                  } else {
                    channels.sendTyping();
                    channels.send(`${entry}`);
                    console.log(`\nSent Snippet Link # (${counter+1})`);
                    counter++;
                  }}
                }
              }
              // if there isnt a song File link existing in the current song result
            }
          replyTo.reply({
            content: `✅ **Search Complete** ✅\n \[ ${counter} \] ***${input}*** **Results Found :** `,
            ephemeral: true,
          });
          } else {
          replyTo.reply({
            content: `❌ **No Results For** ***${input}***\n *please try again* ❌`,
            ephemeral: true,
          });
          }



            break;



          // Get Sessions
          case session:

            // if there is at least one result that matches the songName
            if (results.length) {
              // send each song File that exists for said song
              // for every result found
             for (const result of results){
                //if there is at least one link present in the song's songFile array
                if (result.sessionFile[0]) {
                // for every String within the songFile array
              for (const file of result.sessionFile){
                let resultsArray = format(file);
                for (const resultFile of resultsArray){
                  console.log(`Checking > . > . > . > Session # ${counter}`);
                if (fileCheck(resultFile)) {
                      channels.sendTyping();
                        channels.send({  files: [`${entry}`]});
                      console.log(`\nSent Session File # (${counter+1})`);
                      counter++;
                  } else {
                    channels.sendTyping();
                    channels.send(`${entry}`);
                    console.log(`\nSent Session Link # (${counter+1})`);
                    counter++;
                  }}
                }
              }
              // if there isnt a song File link existing in the current song result
            }

          replyTo.reply({
            content: `✅ **Search Complete** ✅\n \[ ${counter} \] ***${input}*** **Results Found :** `,
            ephemeral: true,
          });
          } else {
          replyTo.reply({
            content: `❌ **No Results For** ***${input}***\n *please try again* ❌`,
            ephemeral: true,
          });
          }



            break;

          // Get info
          case info:
          let erax = "x";
          let statusx = "x";
          let dateReleasedx = "x";
          let dateLeakedx = "x";
          let dateRecordedx = "x";
          let producedByx = "Produced By : ";
          let featuresx = "Features : ";
          let infoMessage = `:face_with_monocle:  **${input} Info : ** \n`;
          let g = 0;

            // if there is at least one result that matches the songName
          if (results.length) {
            // send each song Link that exists for said song
            for (const result of results){
              //if there is at least one link present in the song's songFile array
              if (result.era[0]) {
            for (const file of result.era){
              let resultsArray = format(file);
                for (const entry of resultsArray){
                channels.sendTyping();
                erax = `Era : ${entry}\n`;
                console.log(`\nAdded Era: ${entry} | (${counter+1})`);
                counter++;
              }

            }
            // if there isnt a song File link existing in the current song result
          } else {
            if (!results[g+1].era[0]) {
              if (erax === "x") {
                erax =`Era : *unknown*`;
              }
            }
          }
          // status Info
          if (result.status[0]) {
        for (const file of result.status){
          let resultsArray = format(file);
            for (const entry of resultsArray){
            channels.sendTyping();
            statusx = `Status : ${entry}\n`;
            console.log(`\nAdded Status: ${entry} | (${counter+1})`);
            counter++;
          }

        }
        // if there isnt a song File link existing in the current song result
      } else {
        if (!results[g+1].status[0]) {
          if (statusx === "x") {
            statusx =`Status : *unknown*`;
          }
        }
      }

      // date released Info
      if (result.dateReleased[0]) {
    for (const file of result.dateReleased){
      let resultsArray = format(file);
        for (const entry of resultsArray){
        channels.sendTyping();
        dateReleasedx = `Date Released : ${entry}\n`;
        console.log(`\nAdded Date Released: ${entry} | (${counter+1})`);
        counter++;
      }

    }
    // if there isnt a song File link existing in the current song result
  } else {
    if (!results[g+1].dateReleased[0]) {
      if (dateReleasedx === "x") {
        dateReleasedx =`Date Released : *unreleased*`;
      }
    }
  }

  // date Leaked Info
  if (result.dateLeaked[0]) {
for (const file of result.dateLeaked){
  let resultsArray = format(file);
    for (const entry of resultsArray){
    channels.sendTyping();
    dateLeakedx = `Date Leaked : ${entry}\n`;
    console.log(`\nAdded Date Leaked: ${entry} | (${counter+1})`);
    counter++;
  }

}
// if there isnt a song File link existing in the current song result
} else {
if (!results[g+1].dateLeaked[0]) {
  if (dateLeakedx === "x") {
    dateLeakedx =`Date Leaked : *unknown*`;
  }
}
}

// date Recorded Info
if (result.dateRecorded[0]) {
for (const file of result.dateRecorded){
let resultsArray = format(file);
  for (const entry of resultsArray){
  channels.sendTyping();
  dateRecordedx = `Date Recorded : ${entry}\n`;
  console.log(`\nAdded Date Recorded: ${entry} | (${counter+1})`);
  counter++;
}

}
// if there isnt a song File link existing in the current song result
} else {
if (!results[g+1].dateRecorded[0]) {
if (dateRecordedx === "x") {
  dateRecordedx =`Date Recorded : *unknown*`;
}
}
}

// date Recorded Info
if (result.producedBy[0]) {
for (const file of result.producedBy){
let resultsArray = format(file);
  for (const entry of resultsArray){
  channels.sendTyping();
  producedByx = producedByx + `${entry}\n`;
  console.log(`\nAdded Producer(s): ${entry} | (${counter+1})`);
  counter++;
}

}
// if there isnt a song File link existing in the current song result
} else {
if (!results[g+1].producedBy[0]) {
if (producedByx === "Produced By : ") {
  producedByx =`Producer(s) : *unknown*`;
}
}
}
// date Recorded Info
if (result.features[0]) {
for (const file of result.features){
let resultsArray = format(file);
  for (const entry of resultsArray){
  channels.sendTyping();
  featuresx = featuresx +`${entry}\n`;
  console.log(`\nAdded Feature(s): ${entry} | (${counter+1})`);
  counter++;
}

}
// if there isnt a song File link existing in the current song result
} else {
if (!results[g+1].features[0]) {
if (featuresx === "Features : ") {
  featuresx =`Features : *N/A*`;
}
}
}
g++;
channels.send({content: `${infoMessage}\n${erax}\n${statusx}\n${dateReleasedx}\n${dateLeakedx}\n${producedByx}\n${featuresx}`})

    }
    replyTo.reply({
      content: `✅ **Search Complete** ✅\n ***${g}* Results Found :** `,
      ephemeral: true,
    });
        } else {
          replyTo.reply({
            content: `❌ **No Results For** ***${input}***\n *please try again* ❌`,
            ephemeral: true,
          });
        }



            break;
      default:
      replyTo.reply({
        content: `An Error Occured, Please Try Again`,
        ephemeral: true,
      })

    }
    console.log(`Retrieval for song . . . . : ${songName} is Complete`);





};
