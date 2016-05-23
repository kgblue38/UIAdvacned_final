define([], function() {
    var template = {};
    
    template.itemsSource = '{{#each items}}' 
    + '<li data-id={{id}}" class="collection-item'
    + '{{#if completed}}' 
    + ' completed><div class="view"><input class="toggle" type="checkbox" checked>'
    + '{{else}}' 
    + '><div class="view"><input class="toggle" type="checkbox">'
    + '{{/if}}'
    + '<label>nickname: {{nickname}}, todo: {{todo}}, date: {{date}}</label>'
    + '<button class="destroy"></button></div>'
    + '<input class="edit" value={{todo}}>'
    + '</li>'
    + '{{/each}}';
    
    return template;
});