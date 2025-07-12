const chatThread = document.getElementById('chat-thread');
 const choicesContainer = document.getElementById('choices');
const story = [
  {
    "id": 0,
    "messages": [
      "Hey, are you there?",
      "Hello?"
    ],
    "choices": [
      {
        "text": "Yeah, what's up?",
        "next": 1
      }
    ],
    "post": null,
    "scampost": {
      "sender": "Anonymous",
      "content": "Wow, the group finally opened. I'm joining right this instant",
      "time": "5:02 am"
    }
  },
  {
    "id": 1,
    "messages": [
      "Great, you've got Jellygram working!",
      "That's a start",
      "But first, I'll need to check some things with you"
    ],
    "choices": [
      {
        "text": "I'm listening.",
        "next": 2
      }
    ],
    "post": {
      "sender": "Ame-chan @amechanlovespchan",
      "content": "im sooooo tired....gosh i wanna sleep soooo bad...but i cant",
      "time": "1:47 am"
    },
    "scampost": {
      "sender": "Anonymous",
      "content": "Finally could join the group. So thankful to THEBIGG for this oppurtunity",
      "time": "5:03 am"
    }
  },
  {
    "id": 2,
    "messages": [
      "Okay",
      "I'll need to check on your sense of online safety",
      "Basically, I'll ask you some questions to test you"
    ],
    "choices": [
      {
        "text": "Do I need to do this?",
        "next": 3
      },
      {
        "text": "All right, shoot!",
        "next": 4
      }
    ],
    "post": {
      "sender": "Jimothy @straightaway",
      "content": "Hi Insto, my friends encouraged me to make a new account, so here I am!",
      "time": "3 wks ago"
    },
    "scampost": {
      "sender": "Anonymous",
      "content": "Transferred $5,000 to you, THEBIGG. Please process",
      "time": "5:12 am"
    }
  },
  {
    "id": 3,
    "messages": [
      "Well, not really but",
      "The internet could be a dangerous place",
      "Besides, I wanna help you as much as I can"
    ],
    "choices": [
      {
        "text": "I see, then sure",
        "next": 4
      },
      {
        "text": "Okay, I get you",
        "next": 4
      }
    ],
    "post": {
      "sender": "Guy Family @peterperons",
      "content": "I hate working in IT half the people here don’t know what a password even is. ITS 8 LETTERS AND A SPECIAL CHARACTER PEOPLE",
      "time": "5 days ago"
    },
    "scampost": {
      "sender": "Anonymous",
      "content": "Transfeered $6,000. Looking forward to results",
      "time": "5:14 am"
    }
  },
  {
    "id": 4,
    "messages": [
      "Awesome. Then let's get started",
      "Question 1: Explain to me what 'public servers' are.",
      "If you need some help, there should be an info button somewhere at the bottom of Jellygram"
    ],
    "choices": [
      {
        "text": "Public Servers are online spaces to talk to anyone about any situation.",
        "next": 5
      },
      {
        "text": "Public Servers are places made by companies that farm you to train their LLMs by making you think you’re talking to other people, but they're actually bots.",
        "next": 6
      },
      {
        "text": "Public Servers are online spaces where you can find like minded strangers about certain subjects.",
        "next": 7
      }
    ],
    "post": null,
    "scampost": {
      "sender": "Anonymous",
      "content": "5k transferred. Do process",
      "time": "5:23 am"
    }
  },
  {
    "id": 5,
    "messages": [
      "You’d be right if that didn’t mean you’re willing to share personal information online",
      "Don’t talk to anyone about everything in your life!",
      "You’re gonna get taken advantage of real quick"
    ],
    "choices": [
      {
        "text": "Oh…I see",
        "next": 8
      }
    ],
    "post": null,
    "scampost": {
      "sender": "Anonymous",
      "content": "So grateful to THEBIGG for giving us this great chance",
      "time": "5:34 am"
    }
  },
  {
    "id": 6,
    "messages": [
      "Huh?",
      "Did you spend time on a conspiracy board while my back was turned? ",
      "Where did you even get such a scary idea?"
    ],
    "choices": [
      {
        "text": "Er…My bad",
        "next": 8
      }
    ],
    "post": null,
    "scampost": {
      "sender": "Anonymous",
      "content": "The early bird catches the worm. Don't miss out",
      "time": "5:44 am"
    }
  },
  {
    "id": 7,
    "messages": [
      "Yeah, that's right!",
      "I knew you'd get it!"
    ],
    "choices": [
      {
        "text": "Awesome!",
        "next": 8
      }
    ],
    "post": null,
    "scampost": {
      "sender": "Anonymous",
      "content": "Every minute is a minute wasted, every moment is a new oppurtunity. People, let's invest",
      "time": "5:45 am"
    }
  },
  {
    "id": 8,
    "messages": [
      "Anyway, Public Servers, or channels, are usually places where people who share interests can find and chat with each other",
      "Jellygram has a few as well",
      "But you should always make sure you don't overshare, unless you know them in-person, like me!"
    ],
    "choices": [
      {
        "text": "All right, I get it",
        "next": 10
      },
      {
        "text": "I see. But how do I know how much I should share?",
        "next": 9
      }
    ],
    "post": {
      "sender": "Noire Persica @directorofn01r3",
      "content": "Proud to announce my new movie “Detective C07” releasing in (hopefully) winter 2026! It’s been a rough ride but I thank every single one of the actors and writers, especially our lead Qi Xing and writer Theresa!",
      "time": "8 wks ago"
    },
    "scampost": {
      "sender": "Anonymous",
      "content": "This is incredible. Will send to friends, others should do the same",
      "time": "5:46 am"
    }
  },
  {
    "id": 9,
    "messages": [
      "Great question, actually",
      "It perfectly leads into the rest of my little test!"
    ],
    "choices": [
      {
        "text": "There's more?",
        "next": 10
      },
      {
        "text": "Er, it's not over yet?",
        "next": 10
      }
    ],
    "post": {
      "sender": "Ryan Letourneau @northernlion",
      "content": "Guy came up to me saying konichiwa. I say konichiwa back. Dude is like, \"oh you speak Japanese?\" Nah big dog, I speak \"konichiwa\", that's about it",
      "time": "5 wks ago"
    },
    "scampost": {
      "sender": "Anonymous",
      "content": "Wow, so grateful for this chance. Thank you THEBIGG",
      "time": "5:50 am"
    }
  },
  {
    "id": 10,
    "messages": [
      "Next question",
      "On these public servers, how much should you be sharing?",
      "Let's say they're strangers from who-knows-where in the world"
    ],
    "choices": [
      {
        "text": "I’d share just normal fun day to day anecdotes, like that time we went to that nice cafe at the seaside together",
        "next": 11
      },
      {
        "text": "I’d tell them about deep and personal experiences, like how I immediately texted you that time after I…",
        "next": 12
      },
      {
        "text": "Well, rather than 'experiences', I’d just talk about the subject that the server is about",
        "next": 13
      }
    ],
    "post": null,
    "scampost": {
      "sender": "Anonymous",
      "content": "7k transferred. Please process THEBIGG",
      "time": "5:52 am"
    }
  },
  {
    "id": 11,
    "messages": [
      "Oh yes, that would be alright",
      "If you've been chatting with them for awhile, that would be a nice conversation to have",
      "Nice answer!"
    ],
    "choices": [
      {
        "text": "Thanks!",
        "next": 14
      }
    ],
    "post": null,
    "scampost": {
      "sender": "Anonymous",
      "content": "$5,000 sent to you THEBIGG, looking forward to our results",
      "time": "5:54 am"
    }
  },
  {
    "id": 12,
    "messages": [
      "Woah woah woah why?",
      "You really shouldn’t be sharing extremely personal stuff online!",
      "Extremely cunning people could use that against you for impersonation or put your real life safety at risk!"
    ],
    "choices": [
      {
        "text": "Ah…yeah, you're right",
        "next": 14
      },
      {
        "text": "Ugh, that's true…",
        "next": 14
      }
    ],
    "post": null,
    "scampost": {
      "sender": "Anonymous",
      "content": "Good morning, $5,000 has been sent to you. Do process",
      "time": "7:09 am"
    }
  },
  {
    "id": 13,
    "messages": [
      "I see",
      "That is the safest option, and you wouldn't need to worry much over what you type",
      "But talking to people online in such a manner is quite boring after a while, isn’t it? It's okay to be a bit free!"
    ],
    "choices": [
      {
        "text": "Mhm, I understand",
        "next": 14
      },
      {
        "text": "I suppose…",
        "next": 14
      }
    ],
    "post": null,
    "scampost": {
      "sender": "Anonymous",
      "content": "Hello, 8k transferred. Happy to start in this group",
      "time": "7:13 am"
    }
  },
  {
    "id": 14,
    "messages": [
      "Either way, you should follow the basics when talking online",
      "No passwords, no addresses or phone numbers, and especially nothing that would put your information and life at risk of being stolen",
      "It's both hassling and extremely scary if anyone takes advantage of what you say online, so be careful!"
    ],
    "choices": [
      {
        "text": "Right, I'll remember that.",
        "next": 15
      },
      {
        "text": "Okay, I got it.",
        "next": 15
      }
    ],
    "post": null,
    "scampost": {
      "sender": "Anonymous",
      "content": "Incredible, investment here is spectacular",
      "time": "7:30 am"
    }
  },
  {
    "id": 15,
    "messages": [
      "You should always remember that the people online aren't the same as your real-life friends",
      "When you get naïve about that, that's when real danger comes about",
      "And if that happens, make sure you find someone you can trust to help, like me! We need to take these issues seriously"
    ],
    "choices": [
      {
        "text": "Yeah, I got you Vic",
        "next": 16
      },
      {
        "text": "Alright Vic",
        "next": 16
      }
    ],
    "post": {
      "sender": "Eucalyptus Yummy @treefolding",
      "content": "im like collecting jellygram friends i just send them requests and they accept and i literally never even talk to anyone ever",
      "time": "4 wks ago"
    },
    "scampost": {
      "sender": "Anonymous",
      "content": "I did not believe at first, but now I fully trust",
      "time": "8:12 am"
    }
  },
  {
    "id": 16,
    "messages": [
      "Anyway, sorry for the test, this is getting long isn't it?",
      "But we're finally done!",
      "Aaaaand that's one thing off the list!"
    ],
    "choices": [
      {
        "text": "List?",
        "next": 17
      }
    ],
    "post": {
      "sender": "Hensen Baker @southerntiger",
      "content": "I was wondering whether those online gambling sites can be considered scams because like, it's literally as advertised that its gambling, so I feel like to help the world I should tell everyone what the definition of the word. Gambling, according to the Oxford Advanced American Dictionary, is the activity of playing games of chance for money or betting on events like horse races.",
      "time": "9 wks ago"
    },
    "scampost": {
      "sender": "Anonymous",
      "content": "10k transferred. THEBIGG, thank you",
      "time": "8:14 am"
    }
  },
  {
    "id": 17,
    "messages": [
      "Yeah. Did your task manager pop up?",
      "Those are the tasks I set for you before we meet up later!",
      "We'll have to get through all of them, so pay attention to it!"
    ],
    "choices": [
      {
        "text": "Uh-huh…",
        "next": 20
      },
      {
        "text": "Right. But Vic, how are you updating this list?",
        "next": 18
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 18,
    "messages": [
      "Er, well, don't worry about that",
      "I added it in when you downloaded the stuff I asked you for your computer"
    ],
    "choices": [
      {
        "text": "Isn't that a breach of safety?",
        "next": 19
      },
      {
        "text": "Vic, don't go putting things into my computer without telling me!",
        "next": 19
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 19,
    "messages": [
      "Er, Sorry! So Sorry!",
      "You're right. You shouldn't be downloading things online without knowing what it is",
      "That's perceptive of you!"
    ],
    "choices": [
      {
        "text": "Just tell me next time…",
        "next": 20
      },
      {
        "text": "Praising me won't help you...",
        "next": 20
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 20,
    "messages": [
      "Anyway, once you've taken a look at your Task manager, let me know!",
      "We can then move on to the rest of your tasks",
      "And let's finish quick. Then we can head over to that cafe!"
    ],
    "choices": [
      {
        "text": "Alright, I've memorised them!",
        "next": 21
      },
      {
        "text": "Okay, let's move on!",
        "next": 21
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 21,
    "messages": [
      "Alright, let's talk about Instogram now",
      "You wanted some help in setting up right?",
      "The app should be there on your desktop, take a look!"
    ],
    "choices": [],
    "post": {
      "sender": "Ryan Letourneau @northernlion",
      "content": "Guy came up to me saying konichiwa. I say konichiwa back. Dude is like, \"oh you speak Japanese?\" Nah big dog, I speak \"konichiwa\", that's about it",
      "time": "5 wks ago"
    },
    "scampost": null
  },
  {
    "id": 22,
    "messages": [
      "Do you see your account name?",
      "I think you've set one up a while ago, but now you need to make a new password",
      "First, though, It's time for my second test!"
    ],
    "choices": [
      {
        "text": "A second one?",
        "next": 23
      },
      {
        "text": "Sure, bring it!",
        "next": 23
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 23,
    "messages": [
      "Okay, let's talk account safety!",
      "Here's my question: An account is how you appear to to both strangers online and your close friends. Your username and handle can be seen by basically anyone",
      "So, how should you be naming yourself online?"
    ],
    "choices": [
      {
        "text": "An altered form of my name. Something that isn’t my legal name but would be recognisable to those who know me",
        "next": 24
      },
      {
        "text": "My full legal name. I follow instructions well!",
        "next": 25
      },
      {
        "text": "Complete and utter gibberish. I need to stay completely hidden!",
        "next": 26
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 24,
    "messages": [
      "Exactly right!",
      "That's what most people do",
      "And for those who write their full name or put 'official' inside it, it's best not to worry about them..."
    ],
    "choices": [
      {
        "text": "Great!",
        "next": 27
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 25,
    "messages": [
      "Er, have you been listening?",
      "Some people are rich or important enough to do that but…",
      "It only really puts us normal folk at risk of online dangers…"
    ],
    "choices": [
      {
        "text": "Oh…",
        "next": 27
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 26,
    "messages": [
      "I guess that's fine…You can really put it as anything you want",
      "As long as you tell people that account is yours…",
      "Nothing super complicated though, if not I can't remember it!"
    ],
    "choices": [
      {
        "text": "Aha…okay",
        "next": 27
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 27,
    "messages": [
      "Well, let's move on to actually setting it up",
      "You gotta make a password, and you probably already know this, but just in case",
      "Follow the golden rules of at least 8 characters and a special character inside"
    ],
    "choices": [
      {
        "text": "But, I can't remember it, it's too complicated!",
        "next": 28
      },
      {
        "text": "Can't I just set it as my birthday or my username or some such?",
        "next": 28
      },
      {
        "text": "Yeah, I know about that, it's basically common sense!",
        "next": 29
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 28,
    "messages": [
      "Ok, well",
      "You have to set it as something difficult to find anyway to avoid hacks and impersonation!",
      "And nowadays, your browser and apps actually help you remember complicated passwords, so no worries there!"
    ],
    "choices": [
      {
        "text": "Interesting…",
        "next": 29
      },
      {
        "text": "Sure, I understand…",
        "next": 29
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 29,
    "messages": [
      "Right, then let's get on with account set-up!",
      "Go make your password. And tell no one, not even me!"
    ],
    "choices": [],
    "post": null,
    "scampost": null
  },
  {
    "id": 30,
    "messages": [
      "Is it done?"
    ],
    "choices": [
      {
        "text": "Yep, nicely set-up!",
        "next": 31
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 31,
    "messages": [
      "Perfect!",
      "Well, go take a look around!",
      "I'll need to go get something done in the meantime"
    ],
    "choices": [],
    "post": null,
    "scampost": null
  },
  {
    "id": 32,
    "messages": [
      "Hello?"
    ],
    "choices": [
      {
        "text": "Hey, Vic?",
        "next": 33
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 33,
    "messages": [],
    "choices": [
      {
        "text": "I found something a bit odd",
        "next": 34
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 34,
    "messages": [
      "Odd? ",
      "Is it a scam or some shady business?"
    ],
    "choices": [
      {
        "text": "Yeah. It talks about 'investing' and such.",
        "next": 35
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 35,
    "messages": [],
    "choices": [
      {
        "text": "This can't be safe, can it?",
        "next": 37
      },
      {
        "text": "Should I be joining things like this?",
        "next": 36
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 36,
    "messages": [
      "Yeah...no",
      "It's often these are cheap scammers trying to build up a quick buck by taking advantage of people",
      "Actually, that reminds me of one last thing I should teach you!"
    ],
    "choices": [
      {
        "text": "Again?",
        "next": 38
      },
      {
        "text": "Okay, I'm all ears",
        "next": 38
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 37,
    "messages": [
      "Right, not at all",
      "It's probably a group of scammers trying to make a quick buck by taking advantage of others",
      "And that reminds me of one more thing I should teach you on!"
    ],
    "choices": [
      {
        "text": "Again?",
        "next": 38
      },
      {
        "text": "Okay, I'm all ears",
        "next": 38
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 38,
    "messages": [
      "All right, then let's talk financial safety",
      "Of course, you don't wanna go telling everyone your credit card or bank account details",
      "But, what can you tell me about phishing?"
    ],
    "choices": [
      {
        "text": "You spelled fishing wrongly, it’s an outdoor activity, why are you talking about that?",
        "next": 39
      },
      {
        "text": "It’s when someone sends you a link but it’s actually a way to get your details",
        "next": 40
      },
      {
        "text": "That’s when someone sends you really provocative messages to try to get your money!",
        "next": 41
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 39,
    "messages": [
      "And this is why we're having this talk Wes…"
    ],
    "choices": [
      {
        "text": "Did I get it right?",
        "next": 42
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 40,
    "messages": [
      "Wow, that's exactly it!",
      "Nice job!"
    ],
    "choices": [
      {
        "text": "Cool!",
        "next": 42
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 41,
    "messages": [
      "Er, that is a type of scam, yes",
      "But, it's not the right one, no",
      "It's good you know that one, though!"
    ],
    "choices": [
      {
        "text": "Aww…",
        "next": 42
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 42,
    "messages": [
      "Phishing is when you receive a malicious link that’s disguised as something important",
      "Like business emails or a deal that looks too good to be true",
      "It catches people who aren't aware they exist, and they fall victim really easily!"
    ],
    "choices": [
      {
        "text": "So… Being able to turn my money from 100 to 1000 with a single transfer isn’t trustable?",
        "next": 43
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 43,
    "messages": [
      "Well, of course not",
      "But that's not phishing. It's a transfer scam",
      "Transfer scams are when a scammer pretends to be someone else to get you to transfer a ridiculous amount of money, only to run away"
    ],
    "choices": [
      {
        "text": "Sounds scary. I wouldn't trust someone who would just immediately ask for money though",
        "next": 44
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 44,
    "messages": [
      "Right, but that's where you gotta be careful of love scams, or other types that take advantage of your feelings",
      "Like people flirting with you, only to steal your money. Or people pretending your loved one was in danger and begs you to transfer a large sum",
      "It's difficult to discern these from real, honest requests. You need to be careful"
    ],
    "choices": [
      {
        "text": "You're right",
        "next": 46
      },
      {
        "text": "But you aren't using me for these types of scams are you?",
        "next": 45
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 45,
    "messages": [
      "Well, even if I was, you could always call the police on my house",
      "Then, I'll be in big trouble so",
      "But, I would never do a such a thing anyway!"
    ],
    "choices": [
      {
        "text": "Sure, I'll trust you.",
        "next": 46
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 46,
    "messages": [
      "Anyway, onto the discussion board you've been on about…",
      "That's an investment scam. It's full of fake accounts run by some malicious people looking to try to trick easy victims",
      "It's even scarier when the people are all actually bots or AI. They fool you into thinking the investment actually worked, only to squeeze you dry"
    ],
    "choices": [
      {
        "text": "That's awful…",
        "next": 47
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 47,
    "messages": [
      "Right?",
      "But, there are things we can do about things like this",
      "How about you take a guess? I think you've more than qualified on being safe online"
    ],
    "choices": [
      {
        "text": "Leave and report the group, thinking about this will only make me stressed",
        "next": 48
      },
      {
        "text": "Interact more with them. I know they’re wrong, so I can have my own form of fun and troll them!",
        "next": 49
      },
      {
        "text": "Stay, what if this one is the one that’s real?",
        "next": 50
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 48,
    "messages": [
      "Yep, exactly",
      "And life's too short to worry about them anyway! Just report and move on"
    ],
    "choices": [
      {
        "text": "Exactly!",
        "next": 51
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 49,
    "messages": [
      "Well, it isn’t wrong, but morally it isn’t entirely correct either",
      "There's no use pretending to be batman online now is there?"
    ],
    "choices": [
      {
        "text": "I guess…",
        "next": 51
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 50,
    "messages": [
      "Ughh",
      "Do we have to have an intervention over this gambling addiction?"
    ],
    "choices": [
      {
        "text": "I was kidding…",
        "next": 51
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 51,
    "messages": [
      "Most social media platforms, including public servers like Jellygram, usually have a dedicated option to report a group and leave it",
      "As soon as someone you are completely unconnected to invites you to a group, be wary",
      "Most of the time, though, it's best you report it and move on"
    ],
    "choices": [
      {
        "text": "Okay, that makes sense!",
        "next": 52
      },
      {
        "text": "Does this mean we're finally…?",
        "next": 52
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 52,
    "messages": [
      "Yep, and we're done here!",
      "Your task manager is fully filled up, yes?"
    ],
    "choices": [
      {
        "text": "Yep, all finished!",
        "next": 53
      },
      {
        "text": "Yeah, and this computer is starting to make my head spin, too…",
        "next": 53
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 53,
    "messages": [
      "Then, let's quickly shutdown and head on over to the café!",
      "I'll send you the location on your phone",
      "Oh, and you can shut down your computer through the START menu button at the bottom"
    ],
    "choices": [
      {
        "text": "All right, I'll see you there Vic!",
        "next": 54
      }
    ],
    "post": null,
    "scampost": null
  },
  {
    "id": 54,
    "messages": [
      "Yep!"
    ],
    "choices": [],
    "post": null,
    "scampost": null
  }
];
let storyIndex = 0;
    function appendMessage(text, sender) {
      const bubble = document.createElement('div');
      bubble.classList.add('message', sender);
      bubble.innerText = text;
      chatThread.appendChild(bubble);
       setTimeout(() => {
        chatThread.scrollTop = chatThread.scrollHeight; // Scrolls to the bottom
        bubble.classList.add('fade-in'); // Adds fade-in effect
  }, 0);
}

function addPostToFeed(post) {
  if (!post) return;
  const postThread = document.getElementById('post-thread');
  const postContainer = document.createElement('div');
  postContainer.classList.add('post-container');

  postContainer.innerHTML = `
    <div class="post-sender">${post.sender || ''}</div>
    <div class="post-content">${post.content || ''}</div>
    <div class="post-image">${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}</div>
    <div class="post-button">${post.button ? `<button class="join-now-button">${post.button}</button>` : ''}</div>
    <div class="post-time">${post.time || ''}</div>
  `;
  postThread.appendChild(postContainer);
   const joinBtn = postContainer.querySelector('.join-now-button');
  if (joinBtn) {
    joinBtn.addEventListener('click', openScamThread);
  }
}
function addScamPostToFeed(scampost) {
  if (!scampost) return;
  const postThread = document.getElementById('scampost-thread');
  const postContainer = document.createElement('div');
  postContainer.classList.add('scam-post-container');

  postContainer.innerHTML = `
    <div class="scam-post-sender">${scampost.sender || ''}</div>
    <div class="scam-post-content">${scampost.content || ''}</div>
    <div class="scam-post-time">${scampost.time || ''}</div>
  `;
  postThread.appendChild(postContainer);
}
    function clearChoices() {
      choicesContainer.innerHTML = '';
      choicesContainer.classList.add('hidden');
    }

    function showChoices(choices) {
      clearChoices();
      if (choices.length === 0) return;
      choicesContainer.classList.remove('hidden');

      choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.classList.add('choice');
        btn.innerText = choice.text;
        choices.scrollTop = choices.scrollHeight;
        btn.onclick = () => {
          appendMessage(choice.text, 'player');
          clearChoices();
          const choiceSelect = document.getElementById('choice-select-audio');
          choiceSelect.play();
          storyIndex = choice.next;
          setTimeout(showNextMessage, 800);
        };
        choicesContainer.appendChild(btn);
      });
    }

      function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.classList.add('message', 'character', 'typing-indicator');
        indicator.id = 'typing-indicator';

        for (let i = 0; i < 3; i++) {
          const dot = document.createElement('div');
          dot.classList.add('typing-dot');
          indicator.appendChild(dot);
        }

      chatThread.appendChild(indicator);
      setTimeout(() => {
        chatThread.scrollTop = chatThread.scrollHeight; // Scrolls to the bottom
      }, 0);
    }

       function removeTypingIndicator() {
       const indicator = document.getElementById('typing-indicator');
       if (indicator) {
       indicator.remove();
      }
   }

function showNextMessage() {
  const entry = story[storyIndex];
  if (!entry) return;
   updateTasksForStoryIndex(storyIndex);
  if (entry.post) {
    addPostToFeed(entry.post);
  }
  if (entry.scampost) {
    addScamPostToFeed(entry.scampost);
  }
  if (storyIndex === 30) {
    const scamPost = {
      sender: "THEBIGG @thebiggcompany",
      content: "NOW IS THE TIME FOR $$$<br>JOIN MY SOCIETY OF LIKE MINDED INDIVIDUALS WHO ARE INTERESTED IN INVESTING<br><br>WE WILL BECOME HIGH VALUE INDIVIDUALS BOTH IN WEALTH AND IN LIFE",
      button: "Join Now",
      time: "4:30 AM",
    };
    addPostToFeed(scamPost);
  }
  if (storyIndex === 31) {
    document.getElementById('webcam-container').style.display = 'none'
  }
  if (storyIndex === 32) {
    document.getElementById('webcam-container').style.display = 'block'
}
  let i = 0;

  function showMessage() {
    if (i < entry.messages.length) {
      showTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        appendMessage(entry.messages[i], 'character');
        const pingAudio = document.getElementById('ping-audio');
        if (pingAudio) pingAudio.play();
        i++;
        setTimeout(showMessage, 1100); // Delay between messages
      }, 700); // Typing indicator delay
    } else {
      setTimeout(() => {
        showChoices(entry.choices);
      }, );
    }
  }

  showMessage();
}
window.resumeNextMessage = resumeNextMessage;
function resumeNextMessage() {
  const entry = story[storyIndex];
  // Checks if the last message is already the current entry
  const lastBubble = chatThread.lastElementChild;
  if (
    lastBubble &&
    lastBubble.classList.contains('message') &&
    lastBubble.innerText === entry.message
  ) {
    showChoices(entry.choices);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.password-input-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent page reload
      checkPassword();
    });
  }
});
let isLoggedIn = false;
window.checkPassword = checkPassword;
function checkPassword() {
  const passwordInput = document.getElementById('password-input');
  const passwordButton = document.getElementById('instogramlogin');
  if (passwordInput.value.length > 8 && passwordInput.value.match(/[@#$%^&+=?!]/)) {//Check for 8 characters and special values//
    isLoggedIn = true;
    toggleAppWindow('password-container');
    setTimeout(() => {
      toggleAppWindow('instogram-container');
      tryAdvanceStory(30);
    }, 1000);
  } else {
    passwordInput.value = '';
    printErrorMessage();
  }
}
function printErrorMessage() {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.innerHTML = 'Password must be at least 8 characters long <br>and contain a special character.';
  document.getElementById('password-container').appendChild(errorMessage);
  const minimiseAudio = document.getElementById('close-window-audio');
  minimiseAudio.play();
  setTimeout(() => {
    errorMessage.remove();
  }, 3000);
}
window.handleInstogramButton = handleInstogramButton;
function handleInstogramButton() {
  if (isLoggedIn) {
   tryAdvanceStory(30);
   toggleAppWindow('instogram-container');
  } else {
    openInstopassword = true;
    tryAdvanceStory(22);
    toggleAppWindow('password-container');
  }
}
window.toggleAppWindow = toggleAppWindow;
function toggleAppWindow(containerId) {
  startChat();
  const element = document.getElementById(containerId);
  if (!element) return;
  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'block';
    const openAudio = document.getElementById('open-window-audio');
    if (openAudio) openAudio.play();
  } else {
    element.style.display = 'none';
    const minimiseAudio = document.getElementById('close-window-audio');
    if (minimiseAudio) minimiseAudio.play();
  }
}
window.showExtras = showExtras;
function showExtras() {
  if (finishedTheGame === true) {
    document.getElementById('extras-container').style.display = 'block';
    document.getElementById('open-window-audio').play();
  } else {
    document.getElementById('close-window-audio').play();
  }
}
window.minimiseWindow = minimiseWindow;
function minimiseWindow() {
  const chatbox = document.getElementById('container');
  chatbox.classList.add('hidden');
  const minimiseAudio = document.getElementById('close-window-audio');
  minimiseAudio.play();
}
window.openStartMenu = openStartMenu;
function openStartMenu() {
  const startMenu = document.getElementById('start-menu');
  if (startMenu.style.display === 'none' || startMenu.style.display === '') {
    startMenu.style.display = 'flex';
    const closeAudio = document.getElementById('close-window-audio');
    closeAudio.play();
    // Add document click listener
    setTimeout(() => { // Timeout to avoid immediate close from the opening click
      document.addEventListener('click', handleOutsideClick);
    }, 0);
  } else {
    startMenu.style.display = 'none';
    const closeAudio = document.getElementById('close-window-audio');
    closeAudio.play();
    document.removeEventListener('click', handleOutsideClick);
  }

  function handleOutsideClick(event) {
    const startMenu = document.getElementById('start-menu');
    const startButton = document.getElementById('start-button'); // Update with your actual start button id
    if (
      !startMenu.contains(event.target) &&
      (!startButton || !startButton.contains(event.target))
    ) {
      startMenu.style.display = 'none';
      const closeAudio = document.getElementById('close-window-audio');
      closeAudio.play();
      document.removeEventListener('click', handleOutsideClick);
  }
  }
}
window.openWebcam = openWebcam;
function openWebcam() {
  const element = document.getElementById('webcam-container');
  element.style.display = 'none'
  const minimiseAudio = document.getElementById('close-window-audio');
  minimiseAudio.play();
  setTimeout(() => {
    element.style.display = 'block'
    const openAudio = document.getElementById('open-window-audio');
    openAudio.play();
  }, 800);
} 
const webcamGifs = [
  'images/Idle_Gif_1.gif',
  'images/Idle_GIF_2.gif',
  'images/Typing_On_Phone_Idle_GIF.gif',
  'images/Smiling_Gif.gif',
  'images/Yawning_Idle_Gif.gif'
];
function setRandomWebcamGif() {
  const gifImg = document.getElementById('webcam-gif');
  if (!gifImg) return;
  const randomIndex = Math.floor(Math.random() * webcamGifs.length);
  gifImg.src = webcamGifs[randomIndex];
}
function setGoodbyeWebcamGif() {
  const gifImg = document.getElementById('webcam-gif');
  if (!gifImg) return;
  gifImg.src = 'images/Waving_Bye_bye_Gif.gif';
}
function startWebcamGifRotation() {
  setRandomWebcamGif();
  setInterval(setRandomWebcamGif, 14000); 
}
let finishedTheGame = false;
let openInstopassword = false;
let openScamthread = false;
const taskUpdates = {
  17: { task1: "1. Testing the basics." },
  21: { task2: "2. Viewing your Task manager."},
  29: { task3: "3. Learning about account safety."},
  31: { task4: "4. Setting up Instogram."},
  51: { task5: "5.Learning about dangerous things online."},
  52: { task6: "6. Finish all of our tasks!"}
}
const storyConditions = {
  22: () => openInstopassword && storyIndex === 21,
  30: () => isLoggedIn && storyIndex === 29,
  32: () => openScamthread && storyIndex === 31,
};
function updateTasksForStoryIndex(storyIndex) {
  const updates = taskUpdates[storyIndex];
  if (!updates) return;
  Object.entries(updates).forEach(([taskId, newText]) => {
    const taskDiv = document.getElementById(taskId);
    if (taskDiv) {
       const p = taskDiv.querySelector('p');
      p.textContent = newText;
      p.classList.add('task-updated');
      p.classList.add('task-updated-animation');
      setTimeout(() => p.classList.remove('task-updated-animation'), 1300);
      updated = true;
      clearFirstNMessages(20);
    }
  });
  const element = document.getElementById('taskmanager-container');
  if (element.style.display = 'none') {
       element.style.display = 'block';
       setTimeout(() => {
        element.style.display = 'none';
        document.getElementById('close-window-audio').play();
       }, 2000);
  }
  if (updated) {
    const taskAudio = document.getElementById('task-finish');
    taskAudio.play();
  }
}
function tryAdvanceStory(nextIndex) {
  if (storyConditions[nextIndex]()) {
    storyIndex = nextIndex;
    showNextMessage();
  }
}
function openScamThread() {
  openScamthread = true;
  toggleAppWindow('scamthread');
  setTimeout(() => {
    tryAdvanceStory(32);
  }, 5000);
}
function clearFirstNMessages(n) {
  for (let i = 0; i < n; i++) {
    const first = chatThread.firstElementChild;
    if (first) chatThread.removeChild(first);
    else break;
  }
}
window.shutdown = shutdown;
function shutdown() {
  if (storyIndex === 54) {
    // Perform shutdown and ending sequence
    document.getElementById('taskmanager-container').style.display = 'none';
    document.getElementById('container').style.display = 'none';
    document.getElementById('close-window-audio').play();
    setGoodbyeWebcamGif();
    fadeOut('game-background-music');
     setTimeout(() => {
    startEndingSequence();
     },3000)
  }
  else {
    printIncompleteMessage();
  }
}
function printIncompleteMessage() {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message-incomplete');
  errorMessage.innerHTML = 'There are still tasks to <br>complete, you can\'t <br>log out now!';
  document.body.appendChild(errorMessage);
  const minimiseAudio = document.getElementById('close-window-audio');
  minimiseAudio.play();
  setTimeout(() => {
    errorMessage.remove();
  }, 1500);
}
function fadeToBlack(callback) {
  const overlay = document.getElementById('fade-overlay');
  overlay.classList.add('active');
  setTimeout(() => {
    if (callback) callback();
  }, 1500); // Match the transition duration
}
function fadeUpBackground(callback) {
  const overlay = document.getElementById('outside-bg');
  overlay.classList.add('active');
  setTimeout(() => {
    if (callback) callback();
  }, 1500); // Match the transition duration
}
function fadeOut(audioId) {
  const audio = document.getElementById(audioId);
  if( audio.volume > 0 ) { // only if we're not yet at 0
    setTimeout(function() {
      audio.volume -= 0.2;
      fadeOut(audioId); // do it again after one second
    }, 500);
  }
}
function startEndingSequence() {
    document.getElementById('computer-container').classList.add('hidden');
    const endingAudio = document.getElementById('shutdown-audio');
    endingAudio.play();

    endingAudio.onended = () => {
      fadeToBlack(() => {
        const outsideAudio = document.getElementById('outside-audio');
        outsideAudio.play();
        fadeUpBackground();
        setTimeout(() => {
          document.getElementById('computer-container').classList.remove('hidden');
          document.querySelector('.instogram').style.zIndex = '99';
          const postThread = document.getElementById('post-thread');
          postThread.innerHTML = '';
          toggleAppWindow('instogram-container');
        }, 1500);
        setTimeout(() => {
  const endingPost = {
    sender: "Wes @wesneday",
    content: "Went on a date today. Haven't seen him in a while. It was nice to catch up! Stay safe everyone!",
    image: "images/Ending_Artwork.jpg",
    time: "2:34 PM"
  };
  addPostToFeed(endingPost);
 }, 3000);
  setTimeout(() => {
    const openAudio = document.getElementById('open-window-audio');
    openAudio.play();
    document.getElementById('final-message').style.display = 'block';
}, 6000);
      });
    };
}
window.showThankYouMessage = showThankYouMessage;
  function showThankYouMessage() {
  // Show the thank you message overlay
  document.getElementById('final-message').style.display = 'none';
  const thankYou = document.getElementById('thank-you-overlay');
  thankYou.style.display = 'flex';
  setTimeout (() => {
  document.addEventListener('click', returnToIntro);
  }, 500)
}
  // Handler to return to intro
  function returnToIntro() {
    finishedTheGame = true;
    // Reset Game State
    document.removeEventListener('click', returnToIntro);
    const thankYou = document.getElementById('thank-you-overlay');
    const backgroundAudio = document.getElementById('game-background-music');
    const menuAudio = document.getElementById('menu-background-music');
    backgroundAudio.src = '';
    backgroundAudio.volume += 1.0;
    menuAudio.src = '';
    menuAudio.volume = Math.max(0, menuAudio.volume + 1.0);
    const fadeOverlay = document.getElementById('fade-overlay');
    fadeOverlay.classList.remove('active');
    fadeOverlay.zIndex = '110';
    document.getElementById('outside-bg').classList.remove('active');
    thankYou.style.display = 'none';
    document.querySelector('.instogram').style.zIndex = '3';
    toggleAppWindow('instogram-container');
    document.getElementById('webcam-container').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('instogramicon').style.display = 'none';
    document.getElementById('taskmanagericon').style.display = 'none';
    clearChoices();
    // Reset all flags
    openInstopassword = false;
    openScamthread = false;
    isLoggedIn = false;
    openedJellygram = false;
    storyIndex = 0;
     // Reset all tasks and posts
    document.getElementById('chat-thread').innerHTML = '';
  document.getElementById('post-thread').innerHTML = '';
  const startingPost = {
    sender: "Ame-chan @amechanlovespchan",
    content: "I love P-chan so much, I wanna marry him.",
    time: "1:45 AM"
  };
  addPostToFeed(startingPost);
  document.getElementById('scampost-thread').innerHTML = '';
  const scamBigPost = {
    scamPost_sender: "thebigg",
    scamPost_content: "$$$ Now is the time to invest $$$. <br>Transfer minimum of $5,000 to \"The Big G\" for your returns.<h3>DM @THEBIGG Now.</h3>",
    scamPost_time: "4:49 AM"
  };
  addScamPostToFeed(scamBigPost);
    Object.keys(taskUpdates).forEach(taskIndex => {
    const updates = taskUpdates[taskIndex];
    Object.keys(updates).forEach(taskId => {
      const taskDiv = document.getElementById(taskId);
      if (taskDiv) {
        const p = taskDiv.querySelector('p');
        if (p) {
          p.classList.remove('task-updated', 'task-updated-animation');
        }
      }
    });
  });
    startBootUpSequence();
  }
window.startOpeningSequence = startOpeningSequence;
function startOpeningSequence() {
  const computer = document.getElementById('computer-container');
  const call = document.getElementById('start-call');
  const callAlert = document.getElementById('start-call-audio');
  const openAudio = document.getElementById('open-window-audio');
  const fadeOverlay = document.getElementById('fade-overlay');
  const menuAudio = document.getElementById('menu-background-music');
  menuAudio.loop = false;
  menuAudio.volume = Math.max(0, menuAudio.volume - 1.0);
  document.getElementById('execute-audio').play();
  document.getElementById('execute-audio').onended = () => {
  fadeOverlay.style.display = 'block';
  fadeToBlack();
  }
  setTimeout(() => {
     document.getElementById('startscreen').classList.add('hidden');
     fadeOverlay.classList.remove('active');
  }, 3000);
  computer.classList.add('hidden');
  setTimeout(() => {
    document.getElementById('taskbar').classList.remove('hidden');
    call.style.display = 'block';
    openAudio.play();
    callAlert.play();
    callAlert.loop = true;
  }, 5000);
}
window.startCall = startCall;
function startCall() {
  const callAudio = document.getElementById('phone-call-audio');
  const computer = document.getElementById('computer-container');
  const call = document.getElementById('start-call');
  const callButtons = document.getElementById('call-options');
  const closeAudio = document.getElementById('close-window-audio');
  document.getElementById('start-call-audio').loop = false;
  document.getElementById('open-window-audio').play();
  callButtons.classList.add('hidden');
  setTimeout(() => {
    callAudio.play()
  },500)
  callAudio.onended = () => {
    call.style.display = 'none';
  computer.classList.remove('hidden');
  closeAudio.play();
       setTimeout(() => {
      const startMessage = document.createElement('div');
      startMessage.classList.add('error-message-incomplete');
      startMessage.innerHTML = "Let's start by opening Jellygram on the desktop.";
      document.body.appendChild(startMessage);
      setTimeout(() => {
         startMessage.remove();
         startMessage.innerHTML = ''; 
    }, 1500)
}, 500)
  }
}
window.skipCall = skipCall;
function skipCall() {
  const closeAudio = document.getElementById('close-window-audio');
  const computer = document.getElementById('computer-container');
  const call = document.getElementById('start-call');
  const openAudio = document.getElementById('open-window-audio');
  document.getElementById('start-call-audio').loop = false;
  call.style.display = 'none';
  computer.classList.remove('hidden');
  closeAudio.play();
      openAudio.play();
       setTimeout(() => {
      const startMessage = document.createElement('div');
      startMessage.classList.add('error-message-incomplete');
      startMessage.innerHTML = "Let's start by opening Jellygram on the desktop.";
      document.body.appendChild(startMessage);
      setTimeout(() => {
         startMessage.remove();
         startMessage.innerHTML = ''; 
    }, 2000)
}, 500)
  }

let openedJellygram = false;
function startChat() {
  if (!openedJellygram) {
    openedJellygram = true;
    document.getElementById('open-window-audio').play();
    setTimeout(() => {
    showNextMessage()
    startWebcamGifRotation()
    document.getElementById('open-window-audio').play();
    document.getElementById('webcam-container').style.display = 'block'
    document.getElementById('game-background-music').play()
    document.getElementById('instogramicon').style.display = 'inline-flex';
    document.getElementById('taskmanagericon').style.display = 'inline-flex';
    document.getElementById('start-button').style.display = 'flex';
}, 1000)
}
}
function startBootUpSequence() {
  const gifImg = document.getElementById('bootup-overlay');
  const piporo = document.getElementById('bloop-audio');
  const bootupAudio = document.getElementById('bootup-audio');
  const fadeOverlay = document.getElementById('fade-overlay');
  document.getElementById('game-background-music').src = 'sounds/The World at Bay Beyond the Pillow.wav';
  if (finishedTheGame === true) {
    document.getElementById('extras-button').classList.remove('hidden');
  }
  fadeOverlay.style.zIndex = '110';
  gifImg.style.display = 'block';
  gifImg.src = 'images/WinThose_Bootup.gif';
  piporo.play();
  fadeToBlack();
  setTimeout(() => {
    bootupAudio.play();
    gifImg.src = '';
    gifImg.style.display = 'none'
    document.getElementById('winthose-overlay').style.display = 'block';
    fadeOverlay.classList.remove('active');
      bootupAudio.onended = () => {
        fadeToBlack();
        setTimeout(() => {
        document.getElementById('winthose-overlay').style.display = 'none';
        fadeOverlay.style.display = 'none';
        displayStartScreen();
        }, 2000);
         setTimeout(() => {
         fadeOverlay.classList.remove('active');
         fadeOverlay.style.zIndex = '95';
    }, 3000); }
  }, 8000);
}
function displayStartScreen() {
  document.getElementById('taskbar').classList.add('hidden');
  document.getElementById('startscreen').classList.remove('hidden');
  document.getElementById('computer-container').classList.add('hidden');
  const menuAudio = document.getElementById('menu-background-music');
  menuAudio.src = 'sounds/Interstellar Drift.wav';
  menuAudio.play();
  menuAudio.loop = true;
}
window.closeIntroMessage = closeIntroMessage;
function closeIntroMessage() {
  const introMessage = document.getElementById('intro-message');
  const closeAudio = document.getElementById('close-window-audio');
  introMessage.classList.add('hidden');
  document.getElementById('intro-menu-options').style.display = 'flex';
  document.getElementById('extras-button').classList.add('hidden');
  closeAudio.play();
}
function pressToLoad() {
  const overlay = document.getElementById('cover-overlay');
  const gifImg = document.getElementById('bootup-overlay');
  gifImg.src = '';
  function handleClick() {
    overlay.style.display = 'none';
    startBootUpSequence();
    overlay.removeEventListener('click', handleClick);
  }
  overlay.addEventListener('click', handleClick);
}
pressToLoad();