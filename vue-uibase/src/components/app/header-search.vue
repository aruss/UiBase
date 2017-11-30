<template>
  <form role="search"
        class="navbar-form navbar-form-sm navbar-left shift in" >
    <div class="form-group">
      <div class="input-group">
        <input type="text"
               class="form-control input-sm bg-light no-border rounded padder"
               placeholder="Search projects..."
               aria-autocomplete="list"
               aria-expanded="false"
               aria-owns="typeahead-32-8711"
               aria-invalid="false">
        <span class="input-group-btn">
          <button type="submit" class="btn btn-sm bg-light rounded"><i class="fa fa-search"></i></button>
        </span>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="less">
</style>




