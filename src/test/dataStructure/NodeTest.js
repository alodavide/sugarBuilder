/**
 * Author:  Davide Alocci
 * Version: 0.0.1
 */

import Node from "../../js/dataStructure/Node";

QUnit.module("Test Node object", {});

QUnit.test( "Create new Node" , function( assert ) {

    var node = new Node('test');
    assert.ok(node.getNodeId() === 'test',"Correct id");
    assert.notOk(node.getNodeId() === 'id',"Wrong id");
});

QUnit.test( "Create Node - Missing id" , function(assert) {
    assert.raises(function(){
        var n = new Node();
    });

});

