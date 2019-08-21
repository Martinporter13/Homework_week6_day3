const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
    return foundTransport;


 };


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const foundDistance = this.journeys.filter((journey) => {
    return journey.distance > 1000;
  });
    return foundDistance;

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
