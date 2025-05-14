<script lang="ts">
    import Field from '$lib/components/base/field.svelte';
</script>

<Field label="Name" optional>
    <p class="bg-muted-fg px-2">Your form component here</p>
</Field>

<Field label="Email" helper="Verification link will be sent here" required>
    <p class="bg-muted-fg px-2">Your form component here</p>
</Field>

<Field label="Password" issue="Password is too short" required>
    <p class="bg-muted-fg px-2">Your form component here</p>
</Field>
