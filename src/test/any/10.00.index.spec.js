/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );

describe( "10.00.index.spec.js - Testing module 'lib/index.js'", () => {
  const lib = require( "../../lib" );

  describe( "Testing exports of lib", () => {
    it( "Export of 'EMPTY' should exist and be of type 'string'", () => {
        expect( lib.EMPTY ).to.be.a( "string" );
        expect( lib.EMPTY === "" ).to.be.ok( );
    });
    it( "Export of 'HELP' should exist and be of type 'string'", () => {
        expect( lib.HELP ).to.be.a( "string" );
        expect( lib.HELP === "help" ).to.be.ok( );
    });
    it( "Export of 'ID' should exist and be of type 'string'", () => {
        expect( lib.ID ).to.be.a( "string" );
        expect( lib.ID === "id" ).to.be.ok( );
    });
    it( "Export of 'INVOKE' should exist and be of type 'string'", () => {
        expect( lib.INVOKE ).to.be.a( "string" );
        expect( lib.INVOKE === "invoke" ).to.be.ok( );
    });
    it( "Export of 'TAB1' should exist and be of type 'string'", () => {
        expect( lib.TAB1 ).to.be.a( "string" );
        expect( lib.TAB1 === "  " ).to.be.ok( );
    });
    it( "Export of 'TAB2' should exist and be of type 'string'", () => {
        expect( lib.TAB2 ).to.be.a( "string" );
        expect( lib.TAB2 === "    " ).to.be.ok( );
    });
    it( "Export of 'TAB3' should exist and be of type 'string'", () => {
        expect( lib.TAB3 ).to.be.a( "string" );
        expect( lib.TAB3 === "      " ).to.be.ok( );
    });
    it( "Export of 'USAGE' should exist and be of type 'string'", () => {
        expect( lib.USAGE ).to.be.a( "string" );
    });
    it( "Export of 'USAGEARGS' should exist and be of type 'string'", () => {
        expect( lib.USAGEARGS ).to.be.a( "string" );
    });
    it( "Export of 'USAGEOPTS' should exist and be of type 'string'", () => {
        expect( lib.USAGEOPTS ).to.be.a( "string" );
    });
  });
});
