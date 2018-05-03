<template>
  <a class="ui red card">
    <div class="content">
      <div class="header">Cute Dog </div>
      <div class="ui icon top left pointing dropdown button">
        <i class="wrench icon"></i>
        <div class="menu">
          <div class="header">Edit</div>
          <div class="item">Delete</div>
        </div>
      </div>
      <div class="meta">
        <span class="right floated time">2 days ago</span>
        <span class="category">Animals</span>
      </div>
      <div class="description">
        <p></p>
      </div>
    </div>
    <div class="extra content">
      <div class="right floated author">
        <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'GraphObject',
};
</script>

<style>

</style>
