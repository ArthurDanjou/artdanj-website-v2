<script setup lang="ts">
import Card from '~/components/Card.vue'
</script>

<template>
  <Story
    title="Card"
    :layout="{ type: 'grid' }"
  >
    <Variant title="1x1 Card">
      <Card>
        1x1
      </Card>
    </Variant>
    <Variant title="1x2 Card">
      <Card height="2">
        1x2
      </Card>
    </Variant>
    <Variant title="2x1 Card">
      <Card width="2">
        2x1
      </Card>
    </Variant>
    <Variant title="2x2 Card">
      <Card height="2" width="2">
        2x2
      </Card>
    </Variant>
  </Story>
</template>
