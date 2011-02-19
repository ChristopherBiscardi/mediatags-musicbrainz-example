!important
==========
Making more than 1 request/second to the Musicbrainz web service will ban your ip address

Status
========

Sends Request to musicbrainz database for artist Jaco Pastorius  
Gets back 200 (Resource retrieved successfully)



TODO
==========
* Get data from mediatags(music file)
* Use data from file for request
* Error handling for different codes(200, 400, 401, 404)
* Parse xml response


Musicbrainz
=========
base url is musicbrainz.org/ws/1/  
then add what you're looking for musicbrainz.org/ws/1/artist  
type=xml is necessary musicbrainz.org/ws/1/artist/?type=xml  
add artist name musicbrainz.org/ws/1/artist/?type=xml&name=jaco+pastorius


Musicbrainz Options
===================

Live Feed (pay for commerical use)  
Data snapshots (self hosted database)  
Web Service (returns XML)  


Using the Web Service
===========================

baseurl/collection/?type=xml&query  
OR  
baseurl/collection/MBID  

ex.
musicbrainz.org/ws/1/artist/?type=xml&name=jaco+pastorius


base url: musicbrainz.org/ws/1

Collections:
-------------
* artist
* release-group
* release
* track
* label
* tag
* /MBID

Queries are Collection Specific
---------------
###All Collections Use
type=xml is mandatory and must be the first option after ?  
limit=25 - defaults to 25, must be between 1-100 inclusive  
offset=5 - used for paging, Returns search results starting at a given offset  

###artist  
name=fname+lname - fetches list of artists with matching name

###release-group
title - Fetches a list of release groups with matching title  
artist - Returned release groups should match given artist name  
artistid - Returned release groups should match the artist MBID(MusicBrainz ID)  
releasetypes - Returned release groups must match all of the given release types (space separated values such as: Official, Bootleg, Album, Compilation)

###release

title 	-	Fetch a list of releases with a matching title  
discid 	-	Fetch all releases matching to the given DiscID  
artist -	The returned releases should match the given artist name  
artistid -	The returned releases should match the given artist ID (36 character ASCII representation). If this is given, the artist parameter is ignored.  
releasetypes -	The returned releases must match all of the given release types. This is a list of space separated values like Official, Bootleg, Album, Compilation, etc.  
count -		Number of tracks in the release  
date -		Earliest release date for the release  
asin -		The Amazon ASIN  
lang -		The language for this release  
script -	The script used this release  
cdstubs -	Indicates whether to include CD stubs in the result or not. Can be set to "yes" or "no". By default CD stubs are included.  
limit -		The maximum number of releases returned. Defaults to 25, the maximum allowed value is 100.   

###track

title 	-	 Fetch a list of tracks with a matching title  
artist 	-	The returned tracks have to match the given artist name.  
release -	The returned tracks have to match the given release title.  
duration -	The length of the track in milliseconds  
tracknumber- 	The track number  
artistid -	The artist's MBID. If this is given, the artist parameter is ignored.  
releaseid- 	The release's MBID. If this is given, the release parameter is ignored.  
puid 	-	The returned tracks have to match the given PUID. Note that when searching by this field, all other parameter values are ignored and cannot be used to further filter the results. PUID should be used on its own.  
count 	-	Number of tracks on the release  
releasetype- 	The type of the release this track appears on  
limit 	-	The maximum number of tracks returned. Defaults to 25, the maximum allowed value is 100. 

###label

name -	 Fetch a list of labels with a matching name 

###tag

id -		 The MBID of the entity that you would like to see your tags for, this could be a track ID, release ID, artist ID or label ID
entity- 	Identifies the entity type, can be artist, release, track or label 

###MBID

####artist
####release-group
####release
####track
####label
####tag

