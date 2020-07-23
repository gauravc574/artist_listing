var infoBox_ratingType = 'star-rating';
(function($) {
    "use strict";

    function mainMap() {
        var ib = new InfoBox();

        function locationData(locationURL, locationImg, locationTitle, locationAddress, locationRating, locationRatingCounter) {
            return ('' +
                '<a href="' + locationURL + '" class="listing-img-container">' +
                '<div class="infoBox-close"><i class="fa fa-times"></i></div>' +
                '<img src="' + locationImg + '" alt="">' +
                '<div class="listing-item-content">' +
                '<h3>' + locationTitle + '</h3>' +
                '<span>' + locationAddress + '</span>' +
                '</div>' +
                '</a>' +
                '<div class="listing-content">' +
                '<div class="listing-title">' +
                '<div class="' + infoBox_ratingType + '" data-rating="' + locationRating + '"><div class="rating-counter">(' + locationRatingCounter + ' reviews)</div></div>' +
                '</div>' +
                '</div>')
        }
 var locations = [
 
[locationData('list-single-1.html', 'images/cluster-img/pic1.jpg', 'Watters Road', 'NJ 07865, United States of America', '5.0', '06'), 40.804814474153105, -74.88812696972656, 1, '<i class="im-icon-Bank"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic2.jpg', 'Lebanon Township', 'NJ 07865, United States of America', '5.0', '06'), 40.78419454504955, -74.9121595625, 2, '<i class="im-icon-Beer"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic3.jpg', ' White Oak Ridge Court', 'NJ 07945, United States of America', '4.0', '06'), 40.75368608533142, -74.61827528515624, 3, '<i class="im-icon-Hamburger"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic4.jpg', 'Felch Road, Florham Park', 'NJ 07932, United States of America', '4.0', '06'),40.78263477785881,-74.3855024580078, 4, '<i class="im-icon-Cake"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic5.jpg', '26 Valley Court', 'NJ 10921, United States of America', '4.0', '12'),41.3212039026965,-74.35902140895382, 5, '<i class="im-icon-Car-3"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic6.jpg', 'Hollow Brook Golf Club', 'NJ 10567, United States of America', '4.0', '06'),41.325157357869585,-73.89553569118038, 6, '<i class="im-icon-Clinic"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic7.jpg', '32 Hedge Brook Road', 'Stamford, CT 06903, United States of America', '4.0', '06'),41.1390855080897,-73.59272502223507, 7, '<i class="im-icon-Dog"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic8.jpg', '61 John Street', 'NJ 07481, United States of America', '4.0', '06'),40.974261526761296,-74.15371440211788, 8, '<i class="im-icon-First-Aid"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic7.jpg', '901 Howard Court', 'NJ 07646, United States of America', '4.0', '06'),40.92222618539489,-74.02393840114132, 9, '<i class="im-icon-Plane"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic6.jpg', 'Mineola First Presbyterian Church', 'st Street, Mineola, NY 11501, United States of America', '4.0', '06'),40.74253956320051,-73.63956519998646, 10, '<i class="im-icon-Blouse"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic5.jpg', '133 22nd Street', 'NY 11798, United States of America', '4.0', '06'),40.7558909659603,-73.36834022440053, 10, '<i class="im-icon-Bread-2"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic4.jpg', '170 Handsome Avenue', 'NY 11782, United States of America', '4.0', '06'),40.72762442145559,-73.08612892068959, 11, '<i class="im-icon-Chef-Hat2"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic3.jpg', '103 Cranberry Drive', 'NY 11951, United States of America', '4.0', '06'),40.75450392089122,-72.8506095115099, 12, '<i class="im-icon-Drill"></i>'],

[locationData('list-single-1.html', 'images/cluster-img/pic8.jpg', '61 John Street', 'NJ 07481, United States of America', '4.0', '06'),40.84422081239799,-74.27912244349648, 13, '<i class="im-icon-First-Aid"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic7.jpg', '901 Howard Court', 'NJ 07646, United States of America', '4.0', '06'),40.79520211025921,-74.35534009486366, 14, '<i class="im-icon-Plane"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic6.jpg', 'Mineola First Presbyterian Church', 'st Street, Mineola, NY 11501, United States of America', '4.0', '06'),40.69722959123321,-74.4068385079496, 10, '<i class="im-icon-Blouse"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic5.jpg', '133 22nd Street', 'NY 11798, United States of America', '4.0', '06'),40.79381588568169,-74.99666699916054, 15, '<i class="im-icon-Bread-2"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic4.jpg', '170 Handsome Avenue', 'NY 11782, United States of America', '4.0', '06'),40.7686857353089,-75.14704236537148, 16, '<i class="im-icon-Chef-Hat2"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic3.jpg', '103 Cranberry Drive', 'NY 11951, United States of America', '4.0', '06'),40.66963252905638,-75.34685620814491, 17, '<i class="im-icon-Drill"></i>'],


[locationData('list-single-1.html', 'images/cluster-img/pic5.jpg', '133 22nd Street', 'NY 11798, United States of America', '4.0', '06'),40.967732365684874,-75.43131360560585, 18, '<i class="im-icon-Bread-2"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic4.jpg', '170 Handsome Avenue', 'NY 11782, United States of America', '4.0', '06'),41.02249477721226,-75.79866895228554, 19, '<i class="im-icon-Chef-Hat2"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic3.jpg', '103 Cranberry Drive', 'NY 11951, United States of America', '4.0', '06'),40.99745136215146,-75.50135144740273, 20, '<i class="im-icon-Drill"></i>'],

[locationData('list-single-1.html', 'images/cluster-img/pic8.jpg', '61 John Street', 'NJ 07481, United States of America', '4.0', '06'),41.30751578489723,-75.14906593044452, 21, '<i class="im-icon-First-Aid"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic7.jpg', '901 Howard Court', 'NJ 07646, United States of America', '4.0', '06'),41.21959990697618,-75.10580726345233, 22, '<i class="im-icon-Plane"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic6.jpg', 'Mineola First Presbyterian Church', 'st Street, Mineola, NY 11501, United States of America', '4.0', '06'),41.0508356727246,-75.19026466091327, 23, '<i class="im-icon-Blouse"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic5.jpg', '133 22nd Street', 'NY 11798, United States of America', '4.0', '06'),41.106943409579884,-74.61069496835489, 24, '<i class="im-icon-Bread-2"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic4.jpg', '170 Handsome Avenue', 'NY 11782, United States of America', '4.0', '06'),41.04569201386471,-74.64708718026895, 25, '<i class="im-icon-Chef-Hat2"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic3.jpg', '103 Cranberry Drive', 'NY 11951, United States of America', '4.0', '06'),40.967794563841686,-74.50220497812052, 26, '<i class="im-icon-Drill"></i>'],

[locationData('list-single-1.html', 'images/cluster-img/pic5.jpg', '133 22nd Street', 'NY 11798, United States of America', '4.0', '06'),40.531211320776066,-74.86615431347656, 27, '<i class="im-icon-Bread-2"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic4.jpg', '170 Handsome Avenue', 'NY 11782, United States of America', '4.0', '06'),40.43389594657718,-75.49168837109374, 28, '<i class="im-icon-Chef-Hat2"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic3.jpg', '103 Cranberry Drive', 'NY 11951, United States of America', '4.0', '06'),40.52703608405637,-74.42120802441406, 29, '<i class="im-icon-Drill"></i>'],
[locationData('list-single-1.html', 'images/cluster-img/pic3.jpg', '103 Cranberry Drive', 'NY 11951, United States of America', '4.0', '06'),40.49553956142568,-75.05772841015624, 30, '<i class="im-icon-Drill"></i>'],



        ];
        google.maps.event.addListener(ib, 'domready', function() {
            if (infoBox_ratingType = 'star-rating') {
                starRating('.infoBox .' + infoBox_ratingType + '');
            }
        });
        var mapZoomAttr = $('#map').attr('data-map-zoom');
        var mapScrollAttr = $('#map').attr('data-map-scroll');
        if (typeof mapZoomAttr !== typeof undefined && mapZoomAttr !== false) {
            var zoomLevel = parseInt(mapZoomAttr);
        } else {
            var zoomLevel = 5;
        }
        if (typeof mapScrollAttr !== typeof undefined && mapScrollAttr !== false) {
            var scrollEnabled = parseInt(mapScrollAttr);
        } else {
            var scrollEnabled = false;
        }
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: zoomLevel,
            scrollwheel: scrollEnabled,
            center: new google.maps.LatLng(40.80, -73.70),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            panControl: false,
            navigationControl: false,
            streetViewControl: false,
            gestureHandling: 'cooperative',
            styles: [{
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#747474"
                }, {
                    "lightness": "23"
                }]
            }, {
                "featureType": "poi.attraction",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#f38eb0"
                }]
            }, {
                "featureType": "poi.government",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ced7db"
                }]
            }, {
                "featureType": "poi.medical",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffa5a8"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c7e5c8"
                }]
            }, {
                "featureType": "poi.place_of_worship",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#d6cbc7"
                }]
            }, {
                "featureType": "poi.school",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c4c9e8"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b1eaf1"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": "100"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }, {
                    "lightness": "100"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffd4a5"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffe9d2"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "weight": "3.00"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "weight": "0.30"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#747474"
                }, {
                    "lightness": "36"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#e9e5dc"
                }, {
                    "lightness": "30"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": "100"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#d2e7f7"
                }]
            }]
        });
        $('.listing-item-container').on('mouseover', function() {
            var listingAttr = $(this).data('marker-id');
            if (listingAttr !== undefined) {
                var listing_id = $(this).data('marker-id') - 1;
                var marker_div = allMarkers[listing_id].div;
                $(marker_div).addClass('clicked');
                $(this).on('mouseout', function() {
                    if ($(marker_div).is(":not(.infoBox-opened)")) {
                        $(marker_div).removeClass('clicked');
                    }
                });
            }
        });
        var boxText = document.createElement("div");
        boxText.className = 'map-box'
        var currentInfobox;
        var boxOptions = {
            content: boxText,
            disableAutoPan: false,
            alignBottom: true,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-134, -55),
            zIndex: null,
            boxStyle: {
                width: "270px"
            },
            closeBoxMargin: "0",
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(25, 25),
            isHidden: false,
            pane: "",
            enableEventPropagation: false,
        };
        var markerCluster, overlay, i;
        var allMarkers = [];
        var clusterStyles = [{
            textColor: 'white',
            url: '',
            height: 50,
            width: 50
        }];
        var markerIco;
        for (i = 0; i < locations.length; i++) {
            markerIco = locations[i][4];
            var overlaypositions = new google.maps.LatLng(locations[i][1], locations[i][2]),
                overlay = new CustomMarker(overlaypositions, map, {
                    marker_id: i
                }, markerIco);
            allMarkers.push(overlay);
            google.maps.event.addDomListener(overlay, 'click', (function(overlay, i) {
                return function() {
                    ib.setOptions(boxOptions);
                    boxText.innerHTML = locations[i][0];
                    ib.close();
                    ib.open(map, overlay);
                    currentInfobox = locations[i][3];
                    google.maps.event.addListener(ib, 'domready', function() {
                        $('.infoBox-close').click(function(e) {
                            e.preventDefault();
                            ib.close();
                            $('.map-marker-container').removeClass('clicked infoBox-opened');
                        });
                    });
                }
            })(overlay, i));
        }
        var options = {
            imagePath: 'images/',
            styles: clusterStyles,
            minClusterSize: 2
        };
        markerCluster = new MarkerClusterer(map, allMarkers, options);
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
        var zoomControlDiv = document.createElement('div');
        var zoomControl = new ZoomControl(zoomControlDiv, map);

        function ZoomControl(controlDiv, map) {
            zoomControlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
            controlDiv.style.padding = '5px';
            controlDiv.className = "zoomControlWrapper";
            var controlWrapper = document.createElement('div');
            controlDiv.appendChild(controlWrapper);
            var zoomInButton = document.createElement('div');
            zoomInButton.className = "custom-zoom-in";
            controlWrapper.appendChild(zoomInButton);
            var zoomOutButton = document.createElement('div');
            zoomOutButton.className = "custom-zoom-out";
            controlWrapper.appendChild(zoomOutButton);
            google.maps.event.addDomListener(zoomInButton, 'click', function() {
                map.setZoom(map.getZoom() + 1);
            });
            google.maps.event.addDomListener(zoomOutButton, 'click', function() {
                map.setZoom(map.getZoom() - 1);
            });
        }
        
    }
    var map = document.getElementById('map');
    if (typeof(map) != 'undefined' && map != null) {
        google.maps.event.addDomListener(window, 'load', mainMap);
    }
	






	
	
//====================================Map In Popup======================================================//	


//single list map in popup
    function singleListingMappopup() {
        var myLatlng_popup = new google.maps.LatLng({
            lng: $('#singleListingMappopup').data('longitude'),
            lat: $('#singleListingMappopup').data('latitude'),
        });
        var single_map_popup = new google.maps.Map(document.getElementById('singleListingMappopup'), {
            zoom: 15,
            center: myLatlng_popup,
            scrollwheel: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            panControl: false,
            navigationControl: false,
            streetViewControl: false,
            styles: [{
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#747474"
                }, {
                    "lightness": "23"
                }]
            }, {
                "featureType": "poi.attraction",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#f38eb0"
                }]
            }, {
                "featureType": "poi.government",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ced7db"
                }]
            }, {
                "featureType": "poi.medical",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffa5a8"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c7e5c8"
                }]
            }, {
                "featureType": "poi.place_of_worship",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#d6cbc7"
                }]
            }, {
                "featureType": "poi.school",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c4c9e8"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b1eaf1"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": "100"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }, {
                    "lightness": "100"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffd4a5"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffe9d2"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "weight": "3.00"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "weight": "0.30"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#747474"
                }, {
                    "lightness": "36"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#e9e5dc"
                }, {
                    "lightness": "30"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": "100"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#d2e7f7"
                }]
            }]
        });
        var zoomControlDiv = document.createElement('div');
        var zoomControl = new ZoomControl(zoomControlDiv, single_map_popup);

        function ZoomControl(controlDiv, single_map_popup) {
            zoomControlDiv.index = 1;
            single_map_popup.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
            controlDiv.style.padding = '5px';
            var controlWrapper_popup = document.createElement('div');
            controlDiv.appendChild(controlWrapper);
            var zoomInButton_popup = document.createElement('div');
            zoomInButton_popup.className = "custom-zoom-in";
            controlWrapper.appendChild(zoomInButton);
            var zoomOutButton_popup = document.createElement('div');
            zoomOutButton_popup.className = "custom-zoom-out";
            controlWrapper_popup.appendChild(zoomOutButton_popup);
            google.maps.event.addDomListener(zoomInButton_popup, 'click', function() {
                single_map_popup.setZoom(single_map_popup.getZoom() + 1);
            });
            google.maps.event.addDomListener(zoomOutButton_popup, 'click', function() {
                single_map_popup.setZoom(single_map_popup.getZoom() - 1);
            });
        }
        var singleMapIco_popup = "<i class='" + $('#singleListingMappopup').data('map-icon') + "'></i>";
        new CustomMarker(myLatlng, single_map_popup, {
            marker_id: '1'
        }, singleMapIco_popup);
    }
    var single_map_popup = document.getElementById('singleListingMappopup');
    if (typeof(single_map_popup) != 'undefined' && single_map_popup != null) {
        google.maps.event.addDomListener(window, 'load', singleListingMappopup);
    }

    function CustomMarker(latlng, map, args, markerIco) {
        this.latlng = latlng;
        this.args = args;
        this.markerIco = markerIco;
        this.setMap(map);
    }
    CustomMarker.prototype = new google.maps.OverlayView();
    CustomMarker.prototype.draw = function() {
        var self = this;
        var div = this.div;
        if (!div) {
            div = this.div = document.createElement('div');
            div.className = 'map-marker-container';
            div.innerHTML = '<div class="marker-container">' +
                '<div class="marker-card">' +
                '<div class="front face">' + self.markerIco + '</div>' +
                '<div class="back face">' + self.markerIco + '</div>' +
                '<div class="marker-arrow"></div>' +
                '</div>' +
                '</div>'
            google.maps.event.addDomListener(div, "click", function(event) {
                $('.map-marker-container').removeClass('clicked infoBox-opened');
                google.maps.event.trigger(self, "click");
                $(this).addClass('clicked infoBox-opened');
            });
            if (typeof(self.args.marker_id) !== 'undefined') {
                div.dataset.marker_id = self.args.marker_id;
            }
            var panes = this.getPanes();
            panes.overlayImage.appendChild(div);
        }
        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
        if (point) {
            div.style.left = (point.x) + 'px';
            div.style.top = (point.y) + 'px';
        }
    };
    CustomMarker.prototype.remove = function() {
        if (this.div) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
            $(this).removeClass('clicked');
        }
    };
    CustomMarker.prototype.getPosition = function() {
        return this.latlng;
    };
	
	
//==============================================Single List Map =============================================//
	
//single list map 
    function singleListingMap() {
        var myLatlng = new google.maps.LatLng({
            lng: $('#singleListingMap').data('longitude'),
            lat: $('#singleListingMap').data('latitude'),
        });
        var single_map = new google.maps.Map(document.getElementById('singleListingMap'), {
            zoom: 15,
            center: myLatlng,
            scrollwheel: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            panControl: false,
            navigationControl: false,
            streetViewControl: false,
            styles: [{
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#747474"
                }, {
                    "lightness": "23"
                }]
            }, {
                "featureType": "poi.attraction",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#f38eb0"
                }]
            }, {
                "featureType": "poi.government",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ced7db"
                }]
            }, {
                "featureType": "poi.medical",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffa5a8"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c7e5c8"
                }]
            }, {
                "featureType": "poi.place_of_worship",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#d6cbc7"
                }]
            }, {
                "featureType": "poi.school",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#c4c9e8"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b1eaf1"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": "100"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }, {
                    "lightness": "100"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffd4a5"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffe9d2"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "weight": "3.00"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "weight": "0.30"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#747474"
                }, {
                    "lightness": "36"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#e9e5dc"
                }, {
                    "lightness": "30"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": "100"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#d2e7f7"
                }]
            }]
        });
        var zoomControlDiv = document.createElement('div');
        var zoomControl = new ZoomControl(zoomControlDiv, single_map);

        function ZoomControl(controlDiv, single_map) {
            zoomControlDiv.index = 1;
            single_map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
            controlDiv.style.padding = '5px';
            var controlWrapper = document.createElement('div');
            controlDiv.appendChild(controlWrapper);
            var zoomInButton = document.createElement('div');
            zoomInButton.className = "custom-zoom-in";
            controlWrapper.appendChild(zoomInButton);
            var zoomOutButton = document.createElement('div');
            zoomOutButton.className = "custom-zoom-out";
            controlWrapper.appendChild(zoomOutButton);
            google.maps.event.addDomListener(zoomInButton, 'click', function() {
                single_map.setZoom(single_map.getZoom() + 1);
            });
            google.maps.event.addDomListener(zoomOutButton, 'click', function() {
                single_map.setZoom(single_map.getZoom() - 1);
            });
        }
        var singleMapIco = "<i class='" + $('#singleListingMap').data('map-icon') + "'></i>";
        new CustomMarker(myLatlng, single_map, {
            marker_id: '1'
        }, singleMapIco);
    }
    var single_map = document.getElementById('singleListingMap');
    if (typeof(single_map) != 'undefined' && single_map != null) {
        google.maps.event.addDomListener(window, 'load', singleListingMap);
    }

    function CustomMarker(latlng, map, args, markerIco) {
        this.latlng = latlng;
        this.args = args;
        this.markerIco = markerIco;
        this.setMap(map);
    }
    CustomMarker.prototype = new google.maps.OverlayView();
    CustomMarker.prototype.draw = function() {
        var self = this;
        var div = this.div;
        if (!div) {
            div = this.div = document.createElement('div');
            div.className = 'map-marker-container';
            div.innerHTML = '<div class="marker-container">' +
                '<div class="marker-card">' +
                '<div class="front face">' + self.markerIco + '</div>' +
                '<div class="back face">' + self.markerIco + '</div>' +
                '<div class="marker-arrow"></div>' +
                '</div>' +
                '</div>'
            google.maps.event.addDomListener(div, "click", function(event) {
                $('.map-marker-container').removeClass('clicked infoBox-opened');
                google.maps.event.trigger(self, "click");
                $(this).addClass('clicked infoBox-opened');
            });
            if (typeof(self.args.marker_id) !== 'undefined') {
                div.dataset.marker_id = self.args.marker_id;
            }
            var panes = this.getPanes();
            panes.overlayImage.appendChild(div);
        }
        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
        if (point) {
            div.style.left = (point.x) + 'px';
            div.style.top = (point.y) + 'px';
        }
    };
    CustomMarker.prototype.remove = function() {
        if (this.div) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
            $(this).removeClass('clicked');
        }
    };
    CustomMarker.prototype.getPosition = function() {
        return this.latlng;
    };	
	
	
	
})(this.jQuery);