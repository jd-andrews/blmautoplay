#the intent of this program is to auto-play a video

import webbrowser
import threading, time

WAIT_TIME_SECONDS = 12000
# WAIT_TIME_SECONDS = 10

timesPlayed = 0
okToPlay = "no"

def foo():
    webbrowser.open('https://youtu.be/bCgLa25fDHM')
    global timesPlayed
    timesPlayed += 1
    print (time.ctime() + " Video has been played " + str(timesPlayed) + " times")
    
def firstPlay():
    webbrowser.open('https://youtu.be/bCgLa25fDHM')
    global timesPlayed
    timesPlayed += 1
    print (time.ctime() + " Video has been played " + str(timesPlayed) + " times")

def boilerplate():
    print("I wrote up this quick script to autoplay the video by Zoe Amira. ")
    print("This video was made to inform as well as financially assist BLM. ")
    print("It is full of ads and all proceeds are donated to BLM.")
    print("This script isn't perfect, and it will just automatically open a new instance")
    print("of the video every two hours.")
    print("Please type 'yes' and press the enter key to start running this script.")
    global okToPlay
    okToPlay = raw_input()

boilerplate()

if okToPlay == 'yes':
    firstPlay()
    ticker = threading.Event()
    while not ticker.wait(WAIT_TIME_SECONDS):
        foo()
else:
    print("error")