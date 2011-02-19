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

baseurl/collection/?query  
OR  
baseurl/collection/MBID  


base url: musicbrainz.org/ws/1

Collections:
-------------
* artist
* release-group
* release
* track
* label
* tag
* rating

