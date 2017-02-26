var bespoke = require('bespoke'),
    classes = require('bespoke-classes'),
    keys = require('bespoke-keys'),
    backdrop = require('bespoke-backdrop'),
    hash = require('bespoke-hash'),
    bullets = require('bespoke-bullets'),
    scale = require('bespoke-scale'),
    voltaire = require('bespoke-theme-voltaire'),
    Demos = require('./_demos');

var deck = bespoke.from('#presentation', [
  classes(),
  keys(),
  backdrop(),
  hash(),
  bullets('.bullet'),
  scale(),
  voltaire()
]);


Demos.start();
