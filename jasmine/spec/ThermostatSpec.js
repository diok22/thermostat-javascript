'use strict';
describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
   thermostat = new Thermostat();
 });

  describe('Default Temperature', function() {
    it('is 20 degrees', function() {
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('Changing Temperature', function() {
    it('can increase the temperature', function() {
      thermostat.increase();
      expect(thermostat.temperature).toBe(21);
    });

    it('can decrease the temperature', function() {
      thermostat.decrease();
      expect(thermostat.temperature).toBe(19);
    });
  });

  describe('Minimum temperature', function() {
    it('is 10', function() {
      for(var i=1; i<11; i++) {thermostat.decrease();}
      expect( function() {thermostat.decrease(); } ).toThrow('Minimum temperature of 10 has been reached');
    });

  });



});
