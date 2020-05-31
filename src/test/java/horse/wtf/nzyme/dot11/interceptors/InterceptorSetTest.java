/*
 *  This file is part of nzyme.
 *
 *  nzyme is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  nzyme is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with nzyme.  If not, see <http://www.gnu.org/licenses/>.
 */

package horse.wtf.nzyme.dot11.interceptors;

import horse.wtf.nzyme.NzymeLeader;
import horse.wtf.nzyme.dot11.Dot11MetaInformation;
import horse.wtf.nzyme.notifications.uplinks.misc.LoopbackUplink;

public class InterceptorSetTest {

    protected static final Dot11MetaInformation META_NO_WEP = new Dot11MetaInformation(false, 100, 2400, 1, 0L, false);

    protected void reset(LoopbackUplink loopback, NzymeLeader nzyme) {
        loopback.clear();
        nzyme.getDatabase().useHandle(handle -> handle.execute("DELETE FROM alerts"));
    }

}
