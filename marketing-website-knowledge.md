# HomeBar for Home Assistant — Marketing Website Knowledge Base

Last updated: 2026-02-04

This document captures *current, implemented* behavior in the `homeassistant-helper` repo to help another AI agent produce an accurate marketing website for **HomeBar for Home Assistant** (a macOS menu bar app).

---

## Quick Facts (Machine-Readable)

```yaml
app:
  name: HomeBar
  full_name: "HomeBar for Home Assistant"
  platform: macOS
  minimum_macos: 14
  category: "Menu bar app"
  primary_use_case: "Favorites-first control of Home Assistant entities from the macOS menu bar"
  tech_stack:
    ui: SwiftUI
    networking: "Home Assistant REST API + WebSocket (state_changed)"
    video: "AVKit/AVFoundation (camera live view via HLS when available)"
  connection:
    required_inputs:
      - "Home Assistant Base URL (e.g., https://homeassistant.local:8123)"
      - "Home Assistant Long-Lived Access Token"
    token_storage: "macOS Keychain (token); UserDefaults/AppStorage (base URL, favorites, debug flag)"
  privacy:
    analytics: "None in codebase"
    token_handling: "Redacted in debug logs; never written to UserDefaults"
  distribution_status: "TBD (repo contains a SwiftPM executable target; release checklist mentions Mac App Store steps)"
```

---

## Product Summary (Human-Readable)

**HomeBar** puts your most-used Home Assistant devices in the macOS menu bar so you can check status and control them in seconds—without opening a browser tab or phone app.

Design goals (as expressed in the repo docs): **favorites-first**, **instant control**, **secure token storage**, and **reliable connectivity**.

---

## Target Audience / Positioning

### Who it’s for
- Home Assistant users on macOS who want quick access to a small set of “daily driver” devices (lights, scenes, locks, media, covers, climate, cameras).
- People who keep Home Assistant open “just to toggle a few things” and want fewer context switches.

### The problem it solves
- “I just want to toggle a light / change volume / adjust thermostat quickly.”
- “My dashboard is great, but opening it is friction for simple actions.”

### Core promise (positioning statement)
**Favorites-first Home Assistant control—right from your Mac menu bar.**

---

## What the App Does (Implemented Features)

### Menu bar control panel (favorites list)
- The menu shows **only your selected favorites** (“selected entities”), in an ordered list.
- Each row shows a device name and a subtitle/badge (state, media now-playing, etc.).
- Many entities support **one-click actions** (toggles, lock/unlock, scene activation).
- Some entities expand for **richer controls** (climate, media, camera).

### Favorites management (Settings → Entities)
- Two-pane layout:
  - **All entities**: searchable list with domain filtering and toggles to add/remove favorites.
  - **Favorites**: ordered list that supports drag-and-drop reordering and a quick actions menu.

### Group favorites by area (Settings → General)
- Toggle **Group favorites** to enable area-based grouping.
- HomeBar fetches Home Assistant **Areas**, **Entity Registry**, and **Device Registry** data over the WebSocket.
- Favorites are grouped into area tabs (sorted by area name); the **Favorites** tab is always present.
- Entities without an area mapping appear under an **Other** tab.
- If area data is unavailable (or no favorites are selected), HomeBar falls back to the standard Favorites-only list.

### Connection onboarding (Settings → Connection)
- Enter base URL + long-lived token.
- “Test Connection” reports explicit success/failure.
- “Open Home Assistant” opens the configured base URL.
- “Remove Connection” clears base URL, token, favorites, pending UI state, and stops the WebSocket.

### Real-time state sync (WebSocket)
- Connects to Home Assistant WebSocket and subscribes to `state_changed`.
- Updates entity rows live as state changes.
- Automatically retries/reconnects after failures.

### Security: token stored in Keychain
- Access token is stored in **Keychain**, not in UserDefaults.
- Legacy migration exists: if an older build stored the token in UserDefaults, it’s moved into Keychain on init.

### Launch at login (Settings → General)
- Toggle uses `SMAppService.mainApp` (macOS 13+ APIs; app targets macOS 14).
- If macOS requires approval, the UI suggests enabling via System Settings → Login Items.

### Debug tools (optional)
- Optional in-app debug log (kept in memory, capped to 200 entries).
- Copy-to-clipboard button.
- Tokens are redacted from debug output.

---

## Supported Home Assistant Domains & Controls (As Implemented)

This table is safe for marketing claims because it maps directly to the current UI and service calls.

| Domain / Type | UI in Menu | Controls | Home Assistant service calls (examples) |
|---|---|---|---|
| `light` | Toggle + brightness card | On/Off + brightness slider | `light.turn_on` (with `brightness_pct`), `light.turn_off` |
| `switch` | Toggle | On/Off | `switch.turn_on`, `switch.turn_off` |
| `fan` | Toggle | On/Off | `fan.turn_on`, `fan.turn_off` |
| `input_boolean` | Toggle | On/Off | `input_boolean.turn_on`, `input_boolean.turn_off` |
| `humidifier` | Toggle | On/Off | `humidifier.turn_on`, `humidifier.turn_off` |
| other toggleable-like entities | Toggle | On/Off | fallback `homeassistant.toggle` |
| `media_player` | Play/Pause button + expandable card | Play/Pause, Next/Previous, Volume slider (when supported) | `media_player.media_play_pause`, `media_player.media_next_track`, `media_player.media_previous_track`, `media_player.volume_set` |
| `cover` | Button group | Open / Close / Stop | `cover.open_cover`, `cover.close_cover`, `cover.stop_cover` |
| `climate` | Expandable card | Target temperature (slider + ±) or target range (low/high sliders) | `climate.set_temperature` (`temperature`, `target_temp_low`, `target_temp_high`) |
| `lock` | Two buttons | Lock / Unlock | `lock.lock`, `lock.unlock` |
| `scene` | Activate button | Activate scene | `scene.turn_on` |
| `camera` | Expandable card | Live view (HLS when available) + snapshot fallback + “Open in HA” | WebSocket `camera/stream` + REST `api/camera_proxy/<entity_id>` |

Notes:
- “Sensors” are discoverable and selectable, but **no sensor-specific controls** exist; they display state.
- Brightness and volume sliders send service calls on **edit end** (not continuously while dragging).

---

## Key User Flows (Website “How it works”)

### 1) Connect HomeBar to Home Assistant
1. Open HomeBar Settings.
2. Paste your Home Assistant base URL.
3. Create/paste a **Long-Lived Access Token** in Home Assistant.
4. Click **Test Connection** → success state appears.

### 2) Pick your favorites
1. Go to Settings → Entities.
2. Search or filter by domain (Controls / Sensors / Lights / Climate / Media / Covers / Cameras).
3. Toggle entities into Favorites.
4. Drag to reorder favorites (this order is what the menu shows).

### 2b) (Optional) Group favorites by area
1. Go to Settings → General.
2. Enable **Group favorites**.
3. HomeBar creates tabs for each Home Assistant Area, plus an **Other** tab for unassigned items.

### 3) Daily use
1. Open HomeBar from the macOS menu bar.
2. Toggle devices, adjust brightness/volume/temperature, trigger scenes, view cameras.
3. States update live via WebSocket.

---

## Privacy, Security, and Trust Messaging (Accurate Claims)

Suggested wording (safe based on current code):
- **“Your token is stored in Keychain.”**
- **“HomeBar connects directly to your Home Assistant instance.”**
- **“No analytics SDKs or trackers are included in this codebase.”**
- **“Debug logs are optional, stored in memory, and redact tokens.”**

Implementation details you can cite internally (not necessarily on the website):
- Token persistence uses a small `KeychainStore` wrapper.
- Base URL + favorites order are stored via `@AppStorage`.
- Debug log sanitizer replaces bearer tokens and `token=` query values with `<redacted>`.

---

## Non‑Affiliation / Trademark Note (Recommended)

Home Assistant is a separate project/brand. If you ship publicly (especially in the Mac App Store), include a clear note like:

- “HomeBar is a third‑party app and is not affiliated with or endorsed by the Home Assistant project.”

(Exact trademark language should be reviewed before publishing.)

---

## Screenshot / Asset Checklist (What the Website Will Need)

Recommended captures:
- Menu bar panel showing:
  - A mix of toggles (lights/switches)
  - A media player expanded (now playing + transport + volume)
  - A climate entity expanded (target control)
  - A cover row (Open/Close/Stop)
- Camera entity expanded:
  - Live view (if it works reliably for your setup)
  - Snapshot mode (fallback) to show robustness
- Settings → Connection:
  - URL + token fields
  - Test Connection success state
  - Keychain note (“Your token is stored securely in Keychain.”)
- Settings → Entities:
  - Search + domain filter
  - Favorites reorder UI (drag handle visible)
- Settings → General:
  - Launch at login toggle

If you plan App Store distribution, you’ll also want:
- App icon (not present in this repo)
- Standard macOS App Store screenshot sizes

---

## Website Copy Starter (Optional, Adapt as Needed)

### Hero headline ideas
- “Control Home Assistant from your Mac menu bar.”
- “Your smart home favorites, one click away.”
- “Home Assistant—without the tab switching.”

### Subheadline ideas
- “Pick your daily devices, reorder them, and control them instantly—lights, media, climate, covers, locks, scenes, and cameras.”
- “Native macOS app with real-time updates and Keychain-secured access.”

### Feature bullets (safe)
- Favorites-first: only what you care about in the menu bar
- Reorderable favorites + search and domain filters
- Real-time state updates via WebSocket
- Brightness, volume, and temperature controls
- Camera live view with snapshot fallback
- Token stored in Keychain
- Launch at login

### CTA ideas (choose based on distribution)
- “Download for macOS”
- “Join the beta”
- “Get updates”
- “Build from source”

---

## FAQ (Accurate / Low-Risk)

**Do I need Home Assistant?**  
Yes. HomeBar is a client for an existing Home Assistant instance.

**How do I connect?**  
You provide your Home Assistant base URL and a Long-Lived Access Token.

**Where is my token stored?**  
In macOS Keychain.

**Does it use a cloud service?**  
HomeBar communicates directly with the Home Assistant URL you enter.

**What devices are supported?**  
Any entity can be favorited for status display. Controls currently exist for: lights (incl. brightness), switches, fans, input_booleans, humidifiers, climate temperature, covers, media players, locks, scenes, and cameras.

**Is it affiliated with Home Assistant?**  
No (recommended to state clearly on the site).

---

## Claims to Avoid (To Prevent Misleading Marketing)

Do *not* claim any of the following unless you implement/verify them:
- “Works with multiple Home Assistant instances” (current model stores a single base URL + token).
- “Supports every Home Assistant domain/control” (controls are domain-specific and limited).
- “Works fully offline” (requires network access to reach Home Assistant).
- “Has notifications / automations / widgets” (not present in this repo).
- “End-to-end encrypted beyond Home Assistant’s transport” (the app relies on HTTP(S)/WS(S) transport).
- “App Store available” unless you have a live listing.

---

## Implementation References (For Internal Verification)

Useful file pointers for the agent building the marketing site:
- App entry: `Sources/HomeBar/App/HomeBarApp.swift`
- Menu UI: `Sources/HomeBar/Views/MenuBar/ContentView.swift`, `Sources/HomeBar/Views/MenuBar/EntityRow.swift`
- Domain controls: `Sources/HomeBar/Views/MenuBar/Controls/*`
- Camera live view + snapshot fallback: `Sources/HomeBar/Views/MenuBar/Camera/CameraStreamView.swift`
- Settings: `Sources/HomeBar/Views/Settings/*`
- Favorites reorder: `Sources/HomeBar/Views/Settings/Favorites/FavoriteRow.swift`
- HA entity model: `Sources/HomeBar/Models/HAEntity.swift`
- REST API client: `Sources/HomeBar/Services/HomeAssistantAPI.swift`
- WebSocket client: `Sources/HomeBar/ViewModels/AppViewModel+WebSocket.swift`
- Token storage: `Sources/HomeBar/Services/KeychainStore.swift` + `Sources/HomeBar/ViewModels/AppViewModel.swift`
- Release checklist / roadmap ideas: `docs/v1-release-checklist.md`
